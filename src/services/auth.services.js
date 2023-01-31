export const AuthServices = {
    login: async (email, password) => {
        return new Promise(async (resolve, reject) => {
            fetch('/auth/login', {
                credentials: 'same-origin',
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            }).then(async (response) => {
                resolve(await response.json())
            }).catch((error) => {
                reject(error)
            })
        })
    },
    logout: async () => {
        return new Promise(async (resolve, reject) => {
            fetch('/auth/logout', {
                credentials: 'same-origin',
                redirect: 'follow',
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                },
            }).then(async (response) => {
                resolve(await response.json())
            }).catch((error) => {
                reject(error)
            })
        })
    },
    status: async (access_token) => {
        return new Promise(async (resolve, reject) => {
            fetch(`/users/me?access_token=${access_token}`, {
                credentials: 'same-origin',
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                },
            }).then(async (response) => {
                resolve(await response.json())
            }).catch((error) => {
                reject(error)
            })
        })
    },
    refresh: async (refresh_token) => {
        return new Promise(async (resolve, reject) => {
            fetch('/auth/refresh', {
                credentials: 'same-origin',
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    refresh_token: refresh_token,
                }),
            }).then(async (response) => {
                resolve(await response.json())
            }).catch((error) => {
                reject(error)
            })
        })
    }
}
