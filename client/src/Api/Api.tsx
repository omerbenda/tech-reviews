import { AxiosResponse } from 'axios';
import { axiosInstance } from './AxiosInstance';
import Post from '../Common/Types/Post/Post';
import NewPost from '../Common/Types/Post/NewPost';
import NewUser from '../Common/Types/User/NewUser';
import User from '../Common/Types/User/User';
import LoginParams from '../Common/Types/User/LoginParams';
import LoginResponse from '../Common/Types/Identity/LoginResponse';
import NewPostComment from '../Common/Types/Post/NewPostComment';
import { Cookies } from 'react-cookie';

const getToken: () => string = () => new Cookies().get('token');

const getAuth: () => string = () => `Bearer ${getToken()}`;

const api = {
  posts: {
    get: async (): Promise<AxiosResponse<Post[]>> => {
      return axiosInstance.get('/post', {
        headers: { Authorization: getAuth() },
      });
    },
    getByUser: async (userId: string): Promise<AxiosResponse<Post[]>> => {
      return axiosInstance.get(`/post/by/${userId}`, {
        headers: { Authorization: getAuth() },
      });
    },
    add: async (post: NewPost): Promise<AxiosResponse<Post>> => {
      return axiosInstance.post('/post', post, {
        headers: { Authorization: getAuth() },
      });
    },
    addComment: async (
      comment: NewPostComment
    ): Promise<AxiosResponse<Post>> => {
      return axiosInstance.post('/post/comment', comment, {
        headers: { Authorization: getAuth() },
      });
    },
  },
  users: {
    get: async (id: string): Promise<AxiosResponse<User>> => {
      return axiosInstance.get(`/user/${id}`, {
        headers: { Authorization: getAuth() },
      });
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
        headers: { Authorization: getAuth() },
      });
    },
  },
};

export default api;
