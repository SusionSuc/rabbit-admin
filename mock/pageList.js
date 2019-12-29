const pageList = ['11111', '22222', '33333', '44444']

export default [
  {
    url: '/apmdb/page-speed/speed-list',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: pageList
      }
    }
  }
]
