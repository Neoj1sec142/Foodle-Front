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
      console.log(response.data, "RESPONSE for Detail")
      return response.data
  } catch (error) {
      throw error
  }
}
export const GetPostByUserId = async (id) => {
    try {
        const response = await Client.get(`posts/user/${id}`)
        // console.log(response.data, "RESPONSE for Detail")
        return response.data
    } catch (error) {
        throw error
    }
}

export const AddPost = async (id, post) => {
    console.log(post, id, "BEFORE TRY")
    try {
        const data = {
            title: post.title,
            image: post.image,
            recipeUrl: post.recipeUrl,
            description: post.description,
            rating: post.rating,
            userId: id
        }
        await Client.post(`/posts/create/${id}`, data, {mode: "CORS"})
        .then((res) => console.log(res, "successfully posted"))
        .catch((err) => console.log(err))
    } catch (error) {
        throw error
    } 
}
// export const UpdatePost = async (id) => {}
export const DeletePost = async (id) => {
    // console.log(id)
    try{
        await Client.delete(`posts/delete/${id}`)
        .then((res) => console.log(res, "Successfully deleted post"))
        .catch((error) => console.log(error))
    } catch (err) {
        throw err
    }
}

export const AddComment = async (user_id, post_id, newComment) => {
  console.log(user_id, post_id, newComment, "POST api call");
  try {
      const data = {
          rating: newComment.rating,
          comment: newComment.comment
      }
      console.log(data, "DATA");
      
      await Client.post(`comments/create/post-${post_id}/user-${user_id}`, data)
      .then((res) => console.log(res, "Successfully add a comment"))
      .catch((error) => console.log(error))
  } catch (error) {
      throw error
  }
}