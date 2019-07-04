import axios from '../../src/index'

// axios({
//   method: 'get',
//   url: '/simple/get',
//   params: {
//     a: 1,
//     b: 2
//   }
// })

axios({
  method: 'post',
  url: '/base/post',
  headers: {
    'ararin': 'bbq'
  },
  data: {
    a: 1,
    b: 2,
    c: 3
  }
})

// const arr = new Int32Array([21, 31])

// axios({
//   method: 'post',
//   url: '/base/buffer',
//   data: arr
// })