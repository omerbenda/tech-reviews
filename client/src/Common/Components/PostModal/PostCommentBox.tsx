import { Avatar, Box, Button, Typography } from '@mui/material';
import PostComment from '../../Types/Post/PostComment';

type Props = {
  comment: PostComment;
  onProfileClick: (userId: string) => void;
};

const PostCommentBox = ({ comment, onProfileClick }: Props) => {
  return (
    <Box display="flex" flexDirection="column" gap={1} width="95%">
      <Box />
      <Box>
        <Button variant="text" onClick={() => onProfileClick(comment.user.id)}>
          <Box display="flex" alignItems="center" gap={2}>
            <Avatar src={comment.user.imageUrl} />
            <Typography variant="body1">{comment.user.username}</Typography>
          </Box>
        </Button>
      </Box>
      <Box display="flex" justifyContent="end" width="100%">
        <Box width="90%">
          <Typography variant="body2" overflow="hidden" textOverflow="ellipsis">
            {comment.body}
          </Typography>
        </Box>
      </Box>
      <Box />
    </Box>
  );
};

export default PostCommentBox;
