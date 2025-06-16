import axiosClient from './axiosClients'

const url = '/products'

export const productApi = {
  getAll(params) {
    return axiosClient.get(`${url}`, { params })
  },

  getBySlug(slug) {
    return axiosClient.get(`${url}/slug/${slug}`)
  },

  add(payload) {
    return axiosClient.post(`${url}`, payload)
  },

  edit(payload) {
    const { id, ...body } = payload
    return axiosClient.put(`${url}/${id}`, body)
  },

  remove(id) {
    return axiosClient.delete(`${url}/${id}`)
  },
}
