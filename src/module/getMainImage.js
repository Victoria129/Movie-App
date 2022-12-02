import { addCommentPopupEvent } from './comments.js';
import postLike from './postLike.js';
import getLikeForEach, { numrand } from './getLikeForEach.js';

const getMovieData = async () => {
  const response = await fetch(`https://api.tvmaze.com/search/shows?q=${numrand()}`);
  const myJson = await response.json();
  const totalMovies = document.querySelector('#length-of-move');

  totalMovies.insertAdjacentHTML('afterend', `(${myJson.length})`);
  const mainContainer = document.querySelector('.main-container');

  for (let i = 0; i < myJson.length; i += 1) {
    let { name } = myJson[i].show;
    const movieId = myJson[i].show.id;

    if (name.length > 15) name = `${name.substring(0, 15)}...`;

    const image = JSON.stringify(myJson[i].show.image);
    let imageSrc = 'https://static.tvmaze.com/uploads/images/medium_portrait/206/515082.jpg';

    if (image !== 'null') {
      imageSrc = myJson[i].show.image.medium;
    }

    // const numLike = Number(getLikeForEach(movieId));
    let numLike = 0;
    getLikeForEach(movieId).then((num) => {
      numLike = num;
      mainContainer.innerHTML += `
    <div class="main-container-sup">
        <div class="movie-banner">
            <img class="movie-banner-img"
            src="${imageSrc}"
            alt="${name} Banner" />
        </div>
        <div class="details-info">
            <div class="title-info">
                <h2>${name}</h2>
            </div>
            <div class="like-movies">
            <i  id="${movieId}" class="liked_btn fa-regular fa-heart"></i>
            </div>
        </div>
        <div class="like-doc">
            <p><span id="_${movieId}">${numLike}</span>  likes</p>
        </div>
        <div class="comment-rese">
            <button class="commentBtn" id="${movieId}" data="_${movieId}">comment</button>
            <button id="reservation" data="${movieId}">Reservation</button>
        </div>
    </div>
`;

      const likeBtn = document.querySelectorAll('.liked_btn');
      likeBtn.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          btn.classList.toggle('fa-regular');
          btn.classList.toggle('fa-solid');
          if (btn.classList.contains('fa-solid')) {
            const likes = document.getElementById(`_${e.target.id}`);
            let currentLike = Number(likes.innerHTML);
            currentLike += 1;
            likes.innerHTML = currentLike;
            postLike(e.target.id);
          } else {
            const likes = document.getElementById(`_${e.target.id}`);
            let currentLike = Number(likes.innerHTML);
            currentLike -= 1;
            likes.innerHTML = currentLike;
          }
        });
      });
    }).then(addCommentPopupEvent);
  }
};

export default getMovieData;