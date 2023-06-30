"use strict"

import { components } from "./swagger"

export type iUser = components['schemas']['User']

const VALID_STATUS_CODES: Array<number> = [200, 201, 204]

export function login(email: string, password: string): Promise<components['schemas']['Token']> {

  return fetch('/api/login/', {

    method: 'post', 
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }, 
    body: JSON.stringify({ email, password })

  })
  .then((res: Response): Promise<any> => {

    if (VALID_STATUS_CODES.includes(res.status)) {
      return res.json()
    }

    return res.json().then((err: object): Promise<any> => {
      return Promise.reject(err)
    })
  })
}

export function signin(nickname: iUser["nickname"], email: components['schemas']['Email'], password: components['schemas']['Password']): Promise<string> {

  return fetch('/api/signin/', {

    method: 'post', 
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }, 
    body: JSON.stringify({ nickname, email, password })

  })
  .then((res: Response): Promise<any> => {

    if (VALID_STATUS_CODES.includes(res.status)) {
      return res.json()
    }

    return res.json().then((err: object): Promise<any> => {
      return Promise.reject(err)
    })
  })
}

export function getToken (token: components['schemas']['User']): Promise<iUser> {

  return fetch('/api/session/'+ token)

  .then((res: Response): Promise<any> => {

    if (VALID_STATUS_CODES.includes(res.status)) {
      return res.json()
    }

    return res.json().then((err: object): Promise<any> => {
      return Promise.reject(err)
    })
  })
}