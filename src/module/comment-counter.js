const commentsCounter = () => {
  const comments = document.querySelectorAll('.comment-li');
  return comments.length;
};

export default commentsCounter;