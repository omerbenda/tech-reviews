import { AxiosResponse } from 'axios';
import { axiosInstance } from './AxiosInstance';
import Post from '../Common/Types/Post/Post';
import NewPost from '../Common/Types/Post/NewPost';
import NewUser from '../Common/Types/User/NewUser';
import User from '../Common/Types/User/User';
import LoginParams from '../Common/Types/User/LoginParams';
import LoginResponse from '../Common/Types/Identity/LoginResponse';

// todo find how to add token to necessary requests

const api = {
  posts: {
    get: async (): Promise<AxiosResponse<Post[]>> => {
      return axiosInstance.get('/post', {
        headers: { Authorization: `Bearer ${document.cookie}` },
      });
    },
    add: async (post: NewPost): Promise<AxiosResponse<Post>> => {
      return axiosInstance.post('/post', post, {
        headers: { Authorization: `Bearer ${document.cookie}` },
      });
    },
  },
  users: {
    get: async (id: string): Promise<AxiosResponse<User>> => {
      return axiosInstance.get(`/user/${id}`);
    },
  },
  identity: {
    login: async (
      loginParams: LoginParams
    ): Promise<AxiosResponse<LoginResponse>> => {
      return axiosInstance.post('/identity/login', loginParams);
    },
    register: async (user: NewUser): Promise<AxiosResponse<string>> => {
      return axiosInstance.post('/identity/register', user);
    },
    getSelf: async (): Promise<AxiosResponse<User>> => {
      return axiosInstance.get(`/identity/user`, {
        headers: { Authorization: `Bearer ${document.cookie}` },
      });
    },
  },
};

export default api;
