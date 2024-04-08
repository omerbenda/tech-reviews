import { Send } from '@mui/icons-material';
import { Box, Button, TextField } from '@mui/material';
import { useRef } from 'react';
import NewPostComment from '../../Types/Post/NewPostComment';
import api from '../../../Api/Api';

type Props = {
  postId: string;
};

const PostCommentInput = ({ postId }: Props) => {
  const commentInputRef = useRef<HTMLInputElement>();

  const sendComment = async () => {
    const comment: NewPostComment = {
      postId,
      body: commentInputRef.current?.value || '',
    };

    console.log((await api.posts.addComment(comment)).data);
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
