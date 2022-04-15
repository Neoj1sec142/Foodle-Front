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