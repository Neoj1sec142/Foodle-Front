import Client from './api'

export const GetUsers = async () => {
  try {
      const response = await Client.get(`users`)
      return response.data
  } catch (error) {
      throw error
  }
}

export const GetUsersWithFollowers = async () => {
  try {
      const response = await Client.get(`users/withfollowers`)
      return response.data
  } catch (error) {
      throw error
  }
}

export const GetUserDetail = async (id) => {
  try {
      const response = await Client.get(`users/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}

export const GetUserDetailByUsername = async (username) => {
  try {
      const response = await Client.get(`users/byusername/${username}`)
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

export const FollowUser = async (id, follower_id) => {
  try{
    const follower = await Client.post(`userfollowers/follow/${id}/follower/${follower_id}`)
    return follower.data
  } catch (err) {
    throw err
  }
}

export const UnfollowUser = async (id, follower_id) => {
  try{
    const follower = await Client.delete(`userfollowers/unfollow/${id}/follower/${follower_id}`)
    return follower.data
  } catch (err) {
    throw err
  }
}