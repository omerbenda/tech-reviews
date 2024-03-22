import { Box, Typography } from '@mui/material';
import Post from '../../../../Common/Types/Post/Post';

type Props = {
  post: Post;
};

const PostCard = ({ post }: Props) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      bgcolor="gray"
      width={{ xs: '75%', md: '35%', xl: '25%' }}
      key={post.id}
    >
      <Typography variant="body2" textAlign="center">
        {post.author.username}
      </Typography>
      <Typography variant="h5" textAlign="center">
        {post.content.title}
      </Typography>
      <Typography variant="h6" textAlign="center">
        {post.content.body}
      </Typography>
    </Box>
  );
};

export default PostCard;
