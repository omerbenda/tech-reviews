import { Send } from '@mui/icons-material';
import { Box, Button, TextField } from '@mui/material';
import { useRef } from 'react';
import NewPostComment from '../../Types/Post/NewPostComment';
import api from '../../../Api/Api';
import Post from '../../Types/Post/Post';

type Props = {
  postId: string;
  updatePost: (updatedPost: Post) => void;
};

const PostCommentInput = ({ postId, updatePost }: Props) => {
  const commentInputRef = useRef<HTMLInputElement>();

  const sendComment = async () => {
    if (commentInputRef.current) {
      const comment: NewPostComment = {
        postId,
        body: commentInputRef.current.value,
      };

      await updatePost((await api.posts.addComment(comment)).data);
      commentInputRef.current.value = '';
    }
  };

  return (
    <Box display="flex" width="100%">
      <Box flexGrow="1">
        <TextField
          label="Comment"
          variant="filled"
          fullWidth
          inputRef={commentInputRef}
        />
      </Box>
      <Button onClick={sendComment} variant="contained">
        <Send />
      </Button>
    </Box>
  );
};

export default PostCommentInput;
