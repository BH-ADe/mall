import axios from 'axios'

export function request (config) {
  const instance = axios.create({
    // 真实接口联系coderwhy老师
    baseURL: '',
    timeout: 5000
  })

  instance.interceptors.request.use(config => {
    // console.log(config)
    return config
  }, err => {
    console.log(err)
    return Promise.reject(err)
  })

  instance.interceptors.response.use(res => {
    // console.log(res)
    return res.data
  }, err => {
    console.log(err)
  })
  return instance(config)
}
