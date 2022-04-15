import Client from './api'

export const GetPosts = async () => {
  try {
      const response = await Client.get(`posts`)
      console.log(response, "RESPONSE")
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

export const AddComment = async (id, newComment) => {
  console.log(newComment, "POST api call");
  try {
      const data = {
          rating: 5,
          comment: newComment,
          postId: id
      }
      console.log(data, "DATA");
      
      await Client.post(`comment/${id}`, data)
      .then((res) => console.log(res, "Successfully add a comment"))
      .catch((error) => console.log(error))
  } catch (error) {
      throw error
  }
}