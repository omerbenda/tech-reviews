import { Box } from '@mui/material';
import PostCard from '../PostCard/PostCard';
import Post from '../../Types/Post/Post';

type Props = {
  posts: Post[];
};

const PostList = ({ posts }: Props) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      height="100%"
      p={1}
      sx={{ overflowY: 'auto' }}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyItems="center"
        height="100%"
        gap="5%"
      >
        {posts.map((post: Post) => (
          <PostCard post={post} />
        ))}
      </Box>
    </Box>
  );
};

export default PostList;