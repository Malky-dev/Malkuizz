"use strict"

export interface iUser {
  nickname: string,
  role: "admin" | "moderator" | "basic",
  isVerified: boolean
}

export function login(email: string, password: string): Promise<string> {

  return fetch('/api/login/', {

    method: 'post', 
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }, 
    body: JSON.stringify({ email, password })

  })
  .then((res: Response): Promise<any> => {

    if (res.status === 200) {
      return res.json()
    }

    return res.json().then((err: object): Promise<any> => {
      return Promise.reject(err)
    })

  })
}

export function getToken (token: string): Promise<iUser> {

  return fetch('/api/session/'+ token)

  .then((res: Response): Promise<any> => {

    if (res.status === 200) {
      return res.json()
    }

    return res.json().then((err: object): Promise<any> => {
      return Promise.reject(err)
    })
    
  })
}