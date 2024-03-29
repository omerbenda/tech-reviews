import {
  Box,
  Button,
  Divider,
  Modal,
  Paper,
  TextField,
  Typography,
} from '@mui/material';

type Props = {
  isOpen: boolean;
  closeHandler: () => void;
};

const NewPostModal = ({ isOpen, closeHandler }: Props) => {
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
                <TextField label="Title" variant="filled" />
                <TextField
                  label="Body"
                  variant="filled"
                  multiline
                  fullWidth
                  minRows={5}
                  onChange={(e) => console.log(e.target.value)}
                />
                <Box
                  display="flex"
                  flexDirection="column"
                  flexGrow="1"
                  justifyContent="end"
                >
                  <Button variant="contained" size="large">
                    Post
                  </Button>
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
