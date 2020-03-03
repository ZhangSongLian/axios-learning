// 对axios封装
import axios from 'axios'
import CONTACT_API from './contactApi'
import { Toast } from 'vant'

// 创建一个对象用来包裹请求方法的容器
const instance = axios.create({
  baseURL: 'http://localhost:9000/api',
  timeout: 1000
})
const Http = {} // 包裹请求方法的容器

// 将CONTACT_API循环遍历输出不同的请求方法
for (const [key, value] of Object.entries(CONTACT_API)) { // Object.entries 将不可遍历的对象编程可遍历的对象
  const api = value
  // console.log(api)
  Http[key] = async function (params, isFormData = false, config = {}) {
    let newParams = {}// 创建一个空对象来存放content-type为form-data格式的
    //  content-type是否是form-data的判断
    if (params && isFormData) {
      newParams = new FormData()
      for (const k in params) {
        newParams.append(k, params[k])
      }
    } else {
      newParams = params
    }
    // 不同请求的判断
    let res = {}
    if (api.method === 'put' || api.method === 'patch' || api.method === 'post') {
      try {
        res = await instance[api.method](api.url, newParams, config)
      } catch (err) {
        res = err
      }
    } else if (api.method === 'get' || api.method === 'delete') {
      config.params = newParams
      try {
        res = await instance[api.method](api.url, config)
      } catch (err) {
        res = err
      }
    }
    console.log('res', res)
    return res
  }
}

// 添加拦截器  在请求或响应被 then 或 catch 处理前拦截它们

// 添加请求拦截器
instance.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  Toast.loading({
    duration: 0, // 持续展示 toast
    forbidClick: true,
    message: '加载中...'
  })
  return config
}, (error) => {
  // 对请求错误做些什么
  console.log(error)
  Toast.clear()// 清除提示
  Toast('请求错误，请求稍后重试')
})

// 添加响应拦截器
instance.interceptors.response.use(response => {
  // 对响应数据做点什么
  Toast.clear()
  return response
}, () => {
  // 对响应错误做点什么
  Toast.clear()
  Toast('请求错误，请求稍后重试')
})

export default Http
