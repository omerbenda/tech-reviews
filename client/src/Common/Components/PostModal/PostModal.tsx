import {
  Avatar,
  Box,
  Button,
  Divider,
  Modal,
  Paper,
  Typography,
} from '@mui/material';
import Post from '../../Types/Post/Post';
import PostCommentBox from './PostCommentBox';
import React from 'react';
import PostCommentInput from './PostCommentInput';
import PostRatingBox from './PostRatingBox';
import { useNavigate } from 'react-router-dom';

type Props = {
  post?: Post;
  isOpen: boolean;
  closeHandler: () => void;
  updatePost: (updatedPost: Post) => void;
};

const PostModal = ({ post, isOpen, closeHandler, updatePost }: Props) => {
  const navigate = useNavigate();

  const onAuthorProfileClick = () => {
    navigate(`/profile/${post?.author.id}`);
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
        <Paper elevation={8} sx={{ width: '100%', height: '100%' }}>
          <Box display="flex" width="100%" height="100%">
            {post?.content
              .imageUrl /* todo Make this responsive for mobile */ && (
              <>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  width="30%"
                  height="100%"
                >
                  <Box display="flex" flexDirection="column" flexGrow="1">
                    <Box
                      component="img"
                      src={post?.content.imageUrl}
                      width="100%"
                      height="100%"
                      sx={{ objectFit: 'scale-down' }}
                    />
                  </Box>
                  <Divider sx={{ width: '100%' }} />
                  <PostRatingBox rating={post?.content.reviewerRating || 0} />
                </Box>
                <Divider orientation="vertical" />
              </>
            )}
            <Box
              display="flex"
              flexDirection="column"
              flexGrow="1"
              overflow="hidden"
            >
              <Box
                display="flex"
                flexDirection="column"
                flexGrow="1"
                alignItems="center"
                overflow="hidden"
                width="100%"
                gap={2}
              >
                <Box />
                <Button
                  onClick={onAuthorProfileClick}
                  variant="text"
                  size="large"
                >
                  <Box display="flex" alignItems="center" gap={2}>
                    <Avatar src={post?.author.imageUrl} />
                    <Typography variant="h6">
                      {post?.author.username}
                    </Typography>
                  </Box>
                </Button>
                <Divider sx={{ width: '100%' }} />
                <Box
                  display="flex"
                  justifyContent="space-evenly"
                  alignItems="center"
                  overflow="auto"
                  width="100%"
                  minHeight="15%"
                >
                  <Typography variant="h6" textAlign="center">
                    {post?.content.title}
                  </Typography>
                </Box>
                <Divider sx={{ width: '100%' }} />
                <Box
                  display="flex"
                  flexDirection="column"
                  overflow="auto"
                  flexGrow="1"
                  width="90%"
                >
                  <Typography variant="body2" textAlign="center">
                    {post?.content.body}
                  </Typography>
                </Box>
              </Box>
              {!post?.content.imageUrl && (
                <>
                  <Divider />
                  <PostRatingBox rating={post?.content.reviewerRating || 0} />
                </>
              )}
            </Box>
            <Divider orientation="vertical" />
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              width="40%"
            >
              {post?.comments.map((comment) => (
                <React.Fragment key={comment.id}>
                  <PostCommentBox comment={comment} />
                  <Divider sx={{ width: '90%' }} />
                </React.Fragment>
              ))}
              <Box flexGrow="1" />
              <PostCommentInput
                postId={post?.id || ''}
                updatePost={updatePost}
              />
            </Box>
          </Box>
        </Paper>
      </Box>
    </Modal>
  );
};

export default PostModal;
