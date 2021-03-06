function addLikeToPost(id) {

  const handlePostLike = async () => {
    const res = await fetch(`https://acebook-api.herokuapp.com/posts/${id}/likes`, {
      method: 'POST',
      credentials: 'include',

    })
    const data = await res.json()
    return console.log(data);
    }

  return (
    <form onSubmit={handlePostLike}>
      <button type="submit">&#9829;</button>
    </form>
  );

}

export default addLikeToPost
