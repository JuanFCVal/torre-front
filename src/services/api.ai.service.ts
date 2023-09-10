
import axios from 'axios';
import { AxiosInstance } from 'axios';

class ApiAIService {
    apiUrl: string;
    axiosInstance: AxiosInstance;
    constructor() {
        this.apiUrl = import.meta.env.VITE_ENTITIES_API_URL || '';
        this.axiosInstance = axios.create({
            baseURL: this.apiUrl,
        });
      }


    async searchPeopleByName(name: string)  {
        const requestBody = {
            query: name,
            torreGgId: '',
            identityType: 'person',
            limit: 10,
            meta: false,
            excluding: [],
            excludedPeople: [],
            excludeContacts: true
          };
          const response = await this.axiosInstance.post(`${this.apiUrl}/_search`, requestBody)
          return response.data
    }

  }
  
export const apiAIService = new ApiAIService();