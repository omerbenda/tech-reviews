import {
  Box,
  Button,
  Divider,
  Modal,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import StarRating from '../StarRating/StarRating';

type Props = {
  isOpen: boolean;
  closeHandler: () => void;
};

const NewPostModal = ({ isOpen, closeHandler }: Props) => {
  const [rating, setRating] = useState<number>(0);
  const [imageUrl, setImageUrl] = useState<string>('');

  return (
    <Modal open={isOpen} onClose={closeHandler}>
      <Box>
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
                  <TextField label="Title" variant="filled" />
                  <StarRating rating={rating} onSelection={setRating} />
                </Box>
                <TextField
                  label="Body"
                  variant="filled"
                  multiline
                  fullWidth
                  minRows={3}
                  onChange={(e) => console.log(e.target.value)}
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
                  <Button variant="contained" size="large">
                    Post
                  </Button>
                  <Box height="10px" />
                </Box>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Modal>
  );
};

export default NewPostModal;
