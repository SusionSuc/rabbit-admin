export function Post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        if (response.data.status === 200) {
          resolve(response.data)
        } else {
          Toast({
            message: response.data.msg
          })
        }
      }, err => {
        reject(err)
        Toast({
          message: '操作异常'
        })
      })
      .catch((error) => {
        reject(error)
        Toast({
          message: '操作异常'
        })
      })
  })
}

export function Get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, params)
      .then(response => {
        if (response.status === 200) {
          resolve(response.data)
        } else {
          Toast({
            message: response.data
          })
        }
      }, err => {
        reject(err)
        Toast({
          message: '操作异常'
        })
      })
      .catch((error) => {
        reject(error)
        Toast({
          message: '操作异常'
        })
      })
  })
}
