import User from '../User/User';
import PostComment from './PostComment';
import PostContent from './PostContent';

type Post = {
  id: string;
  author: User;
  content: PostContent;
  comments: PostComment[];
};

export default Post;
