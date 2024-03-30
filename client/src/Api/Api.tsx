import { AxiosResponse } from 'axios';
import { axiosInstance } from './AxiosInstance';
import Post from '../Common/Types/Post/Post';
import NewPost from '../Common/Types/Post/NewPost';

const api = {
  posts: {
    get: async (): Promise<AxiosResponse<Post[]>> => {
      return axiosInstance.get('/post');
    },
    add: async (post: NewPost): Promise<AxiosResponse<Post>> => {
      return axiosInstance.post('/post', post);
    },
  },
};

export default api;
