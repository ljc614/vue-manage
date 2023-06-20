import Mock from 'mockjs'
import homeApi from './mockServerData/home'
//定一mock拦截
Mock.mock('api/home/getData','get',homeApi.getStatisticalData)

