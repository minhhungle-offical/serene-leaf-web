import axiosClient from './axiosClients'

const url = '/cart'

export const cartApi = {
  getCart() {
    return axiosClient.get(`${url}`)
  },
  addToCart(body) {
    return axiosClient.post(`${url}`, body)
  },
  updateQuantity(productId, body) {
    return axiosClient.put(`${url}/update-quantity/${productId}`, body)
  },

  remove(productId) {
    return axiosClient.delete(`${url}/${productId}`)
  },
}
