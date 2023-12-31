import Mock from 'mockjs'
import homeApi from './mockServerData/home'
import user from './mockServerData/user'
import permission from './mockServerData/promission'
//定一mock拦截
Mock.mock('api/home/getData','get',homeApi.getStatisticalData)


Mock.mock('api/user/add','post',user.createUser)
Mock.mock('api/user/edit','post',user.updateUser)
Mock.mock('api/user/del','post',user.deleteUser)
Mock.mock(/api\/user\/getUser/,'get',user.getUserList)

Mock.mock(/api\/permission\/getMenu/,'post',permission.getMenu)