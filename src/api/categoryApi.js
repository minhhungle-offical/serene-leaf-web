import axiosClient from './axiosClients'

const url = '/categories'

export const categoryApi = {
  getAll() {
    return axiosClient.get(`${url}`)
  },
  // getById(id) {
  //   return axiosClient.get(`${url}/${id}`)
  // },

  // add(payload) {
  //   return axiosClient.post(`${url}`, payload)
  // },

  // edit(payload) {
  //   const { id, ...body } = payload
  //   return axiosClient.put(`${url}/${id}`, body)
  // },

  // remove(id) {
  //   return axiosClient.delete(`${url}/${id}`)
  // },
}
