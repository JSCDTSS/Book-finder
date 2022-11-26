
import axios from 'axios'

const backendRequest = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 3000
})

export function createAccount(data){
  return backendRequest.request({
    url: '/accounts/create',
    method: 'post',
    data
  })
}

export function login(params){
  if (!params.uniqueId || !params.password) return
  return backendRequest.request({
    url: '/accounts/login',
    method: 'get',
    params
  })
}

