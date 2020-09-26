import axios, {AxiosRequestConfig, AxiosResponse} from 'axios'

export class Api {

  protected instance = axios.create()
  protected baseUrl = process.env.API_URL ?? '/'

  async handleRequest<T = any>(request: Promise<AxiosResponse<T>>) {
    try {
      return await request
    } catch (e) {
      throw e
    }
  }

  async post<T = any>(url: string, data?: any, config?: AxiosRequestConfig) {
    return await this.handleRequest(this.instance.post<T>(`${this.baseUrl}${url}`, data, config))
  }

  async get<T = any>(url: string, config?: AxiosRequestConfig) {
    return await this.handleRequest(this.instance.get<T>(`${this.baseUrl}${url}`, config))
  }

  async delete<T = any>(url: string, config?: AxiosRequestConfig) {
    return await this.handleRequest(this.instance.delete<T>(`${this.baseUrl}${url}`, config))
  }

  async patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig) {
    return await this.handleRequest(this.instance.patch<T>(`${this.baseUrl}${url}`, data, config))
  }

}

const api = new Api
export default api
