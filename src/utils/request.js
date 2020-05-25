import axios from 'axios'
import $utils from '@/utils/index'
import root from '@/config/apiRoots'

const ENV = process.env.NODE_ENV

// 创建axios实例
const service = axios.create({
  baseURL: root.baseapi, // 设置默认的BASE_API
  timeout: 60 * 1000 // 请求超时时间 60s
})

// request 请求发送之前 拦截器
service.interceptors.request.use(config => {
  // const { activity_id, uid } = $utils.getUrlParams()
  config.params = {
    ...$utils.getUrlParams(),
    ...(config.params || {})
  }
  // console.log('params', config.params, 'url', $utils.getUrlParams())
  return config
}, error => {
  Promise.reject(error)
})

// request 请求收到后 拦截器设置
service.interceptors.response.use(
  response => {
    if (response) {
      if (response.data) {
        const dmError = response.data.dm_error
        const code = response.data.code
        const msg = response.data.error_msg || response.data.msg

        if ((dmError && dmError !== 0) || (code && code !== 200)) { // 如何status 返回false 表示出错
          console.log(msg || '服务出现了问题')
          return Promise.reject(response.data)
        }
      }
      return response.data
    }
  },
  error => {
    console.log(ENV === 'development' ? '服务器端产生错误！' : '网络因素，请稍后重试！')
    return Promise.reject(error.response.data) // 返回接口返回的错误信息
  })

export default service
