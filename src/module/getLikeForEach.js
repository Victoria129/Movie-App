import getLike from './getLike.js';

const getLikeForEach = async (movieId) => {
  const liked = await getLike();
  let like = 0;
  liked.forEach((element) => {
    if (Number(element.item_id) === Number(movieId)) {
      like = element.likes;
    }
  });

  return like;
};

export const numrand = () => {
  const value = Math.floor(Math.random() * 10);
  return value;
};
export default getLikeForEach;