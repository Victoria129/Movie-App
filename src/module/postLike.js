const postLike = async (id) => {
  const newLike = {
    item_id: id,
  };
  const data = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/LyNZhUk1YhHRRwENddml/likes',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newLike),
    },
  );
  await data;
};

export default postLike;