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
      console.log(response.data, "RESPONSE for User")
      return response.data
  } catch (error) {
      throw error
  }
}