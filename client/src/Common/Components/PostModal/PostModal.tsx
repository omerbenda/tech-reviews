import { Box, Divider, IconButton, Modal, Paper } from '@mui/material';
import Post from '../../Types/Post/Post';
import { Favorite } from '@mui/icons-material';
import StarRating from '../StarRating/StarRating';

type Props = {
  post?: Post;
  isOpen: boolean;
  closeHandler: () => void;
};

const PostModal = ({ post, isOpen, closeHandler }: Props) => {
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
        <Paper elevation={8} sx={{ width: '100%', height: '100%' }}>
          <Box display="flex" width="100%" height="100%">
            {post?.content.imageUrl && (
              <>
                <Box display="flex" flexGrow="1">
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    width="100%"
                  >
                    <Box
                      component="img"
                      src={post?.content.imageUrl}
                      flexGrow="1"
                      maxWidth="100%"
                      sx={{ objectFit: 'contain' }}
                    />
                    <Box
                      display="flex"
                      justifyContent="space-evenly"
                      alignItems="center"
                      width="100%"
                      height="10%"
                    >
                      <IconButton aria-label="like">
                        <Favorite />
                      </IconButton>
                      <StarRating rating={post?.content.reviewerRating || 0} />
                    </Box>
                  </Box>
                </Box>
                <Divider orientation="vertical" />
              </>
            )}
            <Box display="flex" flexGrow="1">
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                width="100%"
                height="100%"
              >
                {post?.content.title}
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  width="90%"
                  height="100%"
                >
                  {post?.content.body}
                </Box>
              </Box>
            </Box>
            <Divider orientation="vertical" />
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              width="15%"
            >
              comments
            </Box>
          </Box>
        </Paper>
      </Box>
    </Modal>
  );
};

export default PostModal;
