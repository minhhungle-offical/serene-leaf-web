import axiosClient from './axiosClients'

const url = '/auth'

export const authApi = {
  login(body) {
    return axiosClient.post(`${url}/login`, body)
  },

  register(body) {
    return axiosClient.post(`${url}/register`, body)
  },

  verifyOtp(body) {
    return axiosClient.post(`${url}/register`, body)
  },
}
