import User from '../User/User';

type LoginResponse = {
  token: string;
  user: User;
};

export default LoginResponse;
