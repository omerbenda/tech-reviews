import {
  Box,
  Button,
  Divider,
  Modal,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { useRef, useState } from 'react';
import StarRating from '../StarRating/StarRating';
import NewPost from '../../Types/Post/NewPost';
import api from '../../../Api/Api';
import { useGeneralStore } from '../../../Stores/GeneralStore';
import User from '../../Types/User/User';

type Props = {
  isOpen: boolean;
  closeHandler: () => void;
};

const NewPostModal = ({ isOpen, closeHandler }: Props) => {
  const [rating, setRating] = useState<number>(0);
  const [imageUrl, setImageUrl] = useState<string>('');
  const titleInputRef = useRef<HTMLInputElement>();
  const bodyInputRef = useRef<HTMLInputElement>();

  const currentUser: User | undefined = useGeneralStore(
    (state) => state.currentUser
  );

  const submit = async () => {
    if (currentUser) {
      const newPost: NewPost = {
        content: {
          title: titleInputRef.current?.value || '',
          body: bodyInputRef.current?.value || '',
          reviewerRating: rating,
          imageUrl,
        },
      };

      await api.posts.add(newPost);
      closeHandler();
    }
  };

  return (
    <Modal open={isOpen} onClose={closeHandler}>
      <Box
        position="absolute"
        top="50%"
        left="50%"
        width="75%"
        height="75%"
        sx={{
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Paper
          elevation={8}
          sx={{ overflowY: 'hidden', width: '100%', height: '100%' }}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            overflow="auto"
            width="100%"
            height="100%"
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={1}
              width="95%"
              height="98%"
            >
              <Box />
              <Typography variant="h5" fontWeight="bold">
                New Post
              </Typography>
              <Divider sx={{ width: '100%' }} />
              <Box
                display="flex"
                justifyContent="center"
                alignItems="baseline"
                flexWrap="wrap"
                gap={3}
                width="100%"
              >
                <TextField
                  label="Title"
                  variant="filled"
                  inputRef={titleInputRef}
                />
                <StarRating rating={rating} onSelection={setRating} />
              </Box>
              <TextField
                label="Body"
                variant="filled"
                multiline
                fullWidth
                minRows={3}
                inputRef={bodyInputRef}
              />
              <Box
                display="flex"
                justifyContent="space-evenly"
                flexWrap="wrap"
                gap={1}
                width="100%"
              >
                <TextField
                  label="Image URL"
                  variant="filled"
                  onChange={(e) => setImageUrl(e.target.value)}
                />
                {imageUrl && <Box component="img" src={imageUrl} />}
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                flexGrow="1"
                justifyContent="end"
              >
                <Button variant="contained" size="large" onClick={submit}>
                  Post
                </Button>
                <Box height="10px" />
              </Box>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Modal>
  );
};

export default NewPostModal;
