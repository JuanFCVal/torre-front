
import axios from 'axios';
import { AxiosInstance } from 'axios';
import { IUserSearchByNameResponse } from '../interfaces/userSearchByName';

class ApiLocalService {
    apiUrl: string;
    axiosInstance: AxiosInstance;
    constructor() {
        this.apiUrl = import.meta.env.VITE_LOCAL_API_URL || '';
        this.axiosInstance = axios.create({
            baseURL: this.apiUrl,
        });
      }


    async searchFavoritesByIp()  {
          const response = await this.axiosInstance.get(`${this.apiUrl}favorite`)
          return response.data
    }

    async addNewFavorite(user: IUserSearchByNameResponse)  {
          const response = await this.axiosInstance.post(`${this.apiUrl}favorite`, user)
          return response.data
    }
    async removeFavorite(user: IUserSearchByNameResponse)  {
      const response = await this.axiosInstance.delete(`${this.apiUrl}favorite/${user.ardaId}`)
      return response.data
}


  }
  
export const apiLocalService = new ApiLocalService();