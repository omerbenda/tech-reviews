import { AxiosResponse } from 'axios';
import { axiosInstance } from './AxiosInstance';
import Post from '../Common/Types/Post/Post';
import NewPost from '../Common/Types/Post/NewPost';
import NewUser from '../Common/Types/User/NewUser';
import User from '../Common/Types/User/User';
import LoginParams from '../Common/Types/User/LoginParams';

const api = {
  posts: {
    get: async (): Promise<AxiosResponse<Post[]>> => {
      return axiosInstance.get('/post');
    },
    add: async (post: NewPost): Promise<AxiosResponse<Post>> => {
      return axiosInstance.post('/post', post);
    },
  },
  users: {
    login: async (loginParams: LoginParams): Promise<AxiosResponse<User>> => {
      return axiosInstance.post('/user/login', loginParams);
    },
    add: async (user: NewUser): Promise<AxiosResponse<User>> => {
      return axiosInstance.post('/user', user);
    },
  },
};

export default api;
