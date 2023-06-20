import axios from 'axios'

const http = axios.create({
  // 通用请求地址前缀
  baseURL:'api',
  timeout:3000,

})

// 请求拦截器
axios.interceptors.request.use(function (config){
  // 发送请求前应该
  return config
},function(error){
  // 请求错误
  return Promise.reject(error)
});

//响应拦截器
axios.interceptors.response.use(function (config){
  // 接受相应数据前应该
  return config
},function(error){
  // 响应错误
  return Promise.reject(error)
});

export default http