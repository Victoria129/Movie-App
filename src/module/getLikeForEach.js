import getLike from './getLike.js';

const getLikeForEach = async (movieId) => {
  const liked = await getLike();
  let like = 0;
  liked.forEach((element) => {
    if (Number(element.item_id) === Number(movieId)) {
      like = element.likes;
    }
  });

  return (like);
};

export default getLikeForEach;