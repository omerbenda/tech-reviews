import { Box } from '@mui/material';
import Navbar from '../../Common/Components/Navbar/Navbar';
import Post from '../../Common/Types/Post/Post';
import User from '../../Common/Types/User/User';
import PostCard from '../../Common/Components/PostCard/PostCard';

const users: User[] = [
  {
    id: '0',
    username: 'tester',
  },
  {
    id: '1',
    username: 'dev',
  },
];

const data: Post[] = [
  {
    id: '0',
    author: users[0],
    content: { title: 'interseting product', body: 'this is very interseting' },
  },
  {
    id: '1',
    author: users[0],
    content: { title: 'another product', body: 'yes' },
  },
];

const FeedPage = () => {
  return (
    <Box height="100%">
      <Navbar />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        height="100%"
        sx={{ overflowY: 'auto' }}
      >
        <Box minHeight="5px" height="5%" />
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          width="100%"
          height="100%"
          gap="10%"
        >
          {data.map((post: Post) => (
            <PostCard post={post} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default FeedPage;
