const instance = (url, method, data = {}) => fetch(`http://localhost:3001/${url}`, {
    method: method,
    headers: {
        'Content-Type': 'application/json',
    }, body: JSON.stringify(data),
})

export const authAPI = {
    signIn(data) {
      return instance('signin', "POST", data).then(res => res.json()).then(data => data)
    },
    login(data) {
      return instance('login', "POST", data).then(res => res.json()).then(data => data)
    }
}