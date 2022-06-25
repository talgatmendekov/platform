import axios from 'axios'
import { BASE_URL } from '../api'

const signUpRequest = (signUpData) => {
   return axios.post(`${BASE_URL}/v1/user/register`, signUpData)
}

export const authService = { signUpRequest }
