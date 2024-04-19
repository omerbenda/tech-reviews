import { Box } from '@mui/material';
import PostCard from '../PostCard/PostCard';
import Post from '../../Types/Post/Post';

type Props = {
  posts: Post[];
  onPostOpen: (post: Post) => void;
  onProfileClick: (userId: string) => void;
};

const PostList = ({ posts, onPostOpen, onProfileClick }: Props) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      height="100%"
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
          <PostCard
            post={post}
            onPostOpen={onPostOpen}
            onProfileClick={onProfileClick}
            key={post.id}
          />
        ))}
      </Box>
    </Box>
  );
};

export default PostList;
