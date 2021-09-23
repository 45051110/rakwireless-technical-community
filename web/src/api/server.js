import axios from "axios";
export function getCarousel(token) {
  let url = "/api/index/getCarousel";
  return axios.get(url, { params: { token } })
}