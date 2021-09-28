import axios from "axios";
export function getCarousel(token) {
  let url = "/api/index/getCarousel";
  return axios.get(url, { params: { token } })
}
export function getNews(token) {
  let url = "/api/index/getNews";
  return axios.get(url, { params: { token } })
}
export function register(param) {
  let url = "/api/register";
  return axios.post(url, {
    params:
    {
      username: param.username,
      password: param.password
    }
  })
}
export function login(param) {
  let url = "/api/login";
  return axios.post(url, {
    params:
    {
      username: param.username,
      password: param.password
    }
  })
}