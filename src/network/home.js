import { request } from './request'

export function getHomeMultidata () {
  // console.log('home')
  return request({
    url: '/home/multidata'
  })
}
