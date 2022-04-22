import Client from './api'


export const GetPosts = async () => {
  try {
      const response = await Client.get(`posts`)
      return response.data
  } catch (error) {
      throw error
  }
}

export const GetPostDetail = async (id) => {
  try {
      const response = await Client.get(`posts/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}

export const GetPostByUserId = async (id) => {
    try {
        const response = await Client.get(`posts/user/${id}`)
        return response.data
    } catch (error) {
        throw error
    }
}

export const AddPost = async (id, post) => {
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

export const DeletePost = async (id) => {
    try{
        await Client.delete(`posts/delete/${id}`)
        .then((res) => console.log(res, "Successfully deleted post"))
        .catch((error) => console.log(error))
    } catch (err) {
        throw err
    }
}

export const AddComment = async (user_id, post_id, newComment) => {
  try {
      const data = {
          rating: newComment.rating,
          comment: newComment.comment
      }
      await Client.post(`comments/create/post-${post_id}/user-${user_id}`, data)
      .then((res) => console.log(res, "Successfully add a comment"))
      .catch((error) => console.log(error))
  } catch (error) {
      throw error
  }
}