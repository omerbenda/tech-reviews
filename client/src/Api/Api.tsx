import { AxiosResponse } from 'axios';
import { axiosInstance } from './AxiosInstance';
import Post from '../Common/Types/Post/Post';

const api = {
  posts: {
    get: async (): Promise<AxiosResponse<Post[]>> => {
      return axiosInstance.get('/post');
    },
  },
};

export default api;
