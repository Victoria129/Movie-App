const getLike = async () => {
  const response = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/LyNZhUk1YhHRRwENddml/likes',
    {
      method: 'GET',
    },
  );
  const list = await response.json();
  return list;
  //  localStorage.setItem('newLike', JSON.stringify(list));
};

export default getLike;