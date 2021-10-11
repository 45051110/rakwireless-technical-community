import axios from "axios";
export function getCarousel(token) {
  let url = "/api/index/getCarousel";
  return axios.get(url, { params: { token } })
}
export function getNews(token) {
  let url = "/api/index/getNews";
  return axios.get(url, { params: { token } })
}
export function createPost(param) {
  let url = "/api/createPost";
  return axios.post(url, {
    params:
    {
      status: param.status,
      author: param.author,
      title: param.title,
      content: param.content,
      token:"sccacasdasdasd"
    }
  })
}
export function getNewsDetail(id) {
  let url = "/api/getNewsDetail";
  return axios.get(url, { params: { id: id } })
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