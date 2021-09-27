import axios from "axios";
export function getCarousel(token) {
  let url = "/api/index/getCarousel";
  return axios.get(url, { params: { token } })
}
export function getNews(token) {
  let url = "/api/index/getNews";
  return axios.get(url, { params: { token } })
}