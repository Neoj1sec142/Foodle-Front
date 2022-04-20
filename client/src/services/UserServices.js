import Client from './api'

export const GetUsers = async () => {
  try {
      const response = await Client.get(`users`)
      console.log(response, "RESPONSE")
      return response.data
  } catch (error) {
      throw error
  }
}

export const GetUserDetail = async (id) => {
  try {
      const response = await Client.get(`users/${id}`)
      // console.log(response.data, "RESPONSE for User")
      return response.data
  } catch (error) {
      throw error
  }
}
export const GetUserDetailByUsername = async (username) => {
  try {
      const response = await Client.get(`users/byusername/${username}`)
      // console.log(response.data, "RESPONSE for User")
      return response.data
  } catch (error) {
      throw error
  }
}

export const UpdateUserProfile = async (id, userDetails) => {
  try {
    const response = await Client.put(`users/update/${id}`, userDetails)
    return response.data
  } catch (error) {
    throw error
  }
}


export const GetFollowersByUserId = async (id) => {
  try {
    const response = await Client.get(`userfollowers/followers/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}
export const GetFollowingByFollowerId = async (id) => {
  try {
    const response = await Client.get(`userfollowers/following/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}