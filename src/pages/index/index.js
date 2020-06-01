import { cloneDeep, debounce, throttle } from 'lodash-es'
import 'normalize.css'
import '@/assets/styles/common.less'
import './index.less'
import request from '@/utils/request'

import './test.js'

console.log(cloneDeep, throttle, debounce)
request.get('/activity/activity/detail?uid=123&activity_id=2').then(res => {
  console.log(res)
})
request.get('/user/admin/login-info').then(res => {
  console.log(res)
})

if (module.hot) {
  module.hot.accept('./test.js', function () {
    console.log('hot reload')
  })
}
