const commentCounter = () => {
  const comments = document.querySelectorAll('.comment-li');
  return comments.length;
};

export default commentCounter;


export const countComment = async (id) => {
  const countCom = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/4dyq58hiPupb0utce3OK/comments?item_id=${id}`);
  const comment = await countCom.json();
  return comment;
}

export default commentCounter;

