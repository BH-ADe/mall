import { request } from './request'

export function getHomeMultidata () {
  // console.log('home')
  return request({
    url: '/home/multidata'
    //url: '/test/getBanners'
  })
}

export function getHomeData (type,page) {
  // console.log('home')
  return request({
    url: '/home/data',
    params: {
      type: type,
      page: page
    }
  })
}
