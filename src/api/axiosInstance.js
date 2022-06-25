/* eslint-disable no-param-reassign */
import axios from 'axios'
import { BASE_URL } from '.'

export const axiosInstance = axios.create(BASE_URL)

axiosInstance.interceptors.request.use(
   async (config) => {
      // eslint-disable-next-line no-param-reassign
      // eslint-disable-next-line no-undef
      // eslint-disable-next-line no-param-reassign
      // eslint-disable-next-line no-undef
      config.headers = headers
      return config
   },
   (error) => {
      Promise.reject(error)
   }
)
