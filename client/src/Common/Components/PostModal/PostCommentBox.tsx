import { Avatar, Box, Typography } from '@mui/material';
import PostComment from '../../Types/Post/PostComment';

type Props = {
  comment: PostComment;
};

const PostCommentBox = ({ comment }: Props) => {
  return (
    <Box display="flex" flexDirection="column" p={1} width="100%">
      <Box display="flex" alignItems="center" gap={1} width="100%">
        <Avatar src={comment.user.imageUrl} />
        <Typography variant="body1">{comment.user.username}</Typography>
      </Box>
      <Box display="flex" justifyContent="end" width="100%">
        <Box width="90%">
          <Typography variant="body2" overflow="hidden" textOverflow="ellipsis">
            {comment.body}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PostCommentBox;
