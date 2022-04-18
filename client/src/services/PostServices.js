import Client from './api'


export const GetPosts = async () => {
  try {
      const response = await Client.get(`posts`)
      //console.log(response, "RESPONSE")
      return response.data
  } catch (error) {
      throw error
  }
}

export const GetPostDetail = async (id) => {
  try {
      const response = await Client.get(`posts/${id}`)
      // console.log(response.data, "RESPONSE for Detail")
      return response.data
  } catch (error) {
      throw error
  }
}

export const AddPost = async (id, newPost) => {
    try {
        const data = {
            image: newPost.image,
            recipeUrl: newPost.url,
            rating: newPost.rating,
            userId: id
        }
        await Client.post(`/posts/create/${id}`, data)
        .then((res) => console.log(res, "successfully posted"))
        .catch((err) => console.log(err))
    } catch (error) {
        throw error
    } 
}
// export const UpdatePost = async (id) => {}
// export const DeletePost = async (id) => {}

export const AddComment = async (id, newComment) => {
  console.log(newComment, "POST api call");
  try {
      const data = {
          rating: 5,
          comment: newComment,
          postId: newComment.id
      }
      console.log(data, "DATA");
      
      await Client.post(`comment/${id}`, data)
      .then((res) => console.log(res, "Successfully add a comment"))
      .catch((error) => console.log(error))
  } catch (error) {
      throw error
  }
}