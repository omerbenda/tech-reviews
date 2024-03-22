import User from '../User/User';
import PostContent from './PostContent';

type Post = {
  id: string;
  author: User;
  content: PostContent;
};

export default Post;
