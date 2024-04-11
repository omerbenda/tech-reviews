import { Box, Divider, Modal, Paper } from '@mui/material';
import Post from '../../Types/Post/Post';
import PostCommentBox from './PostCommentBox';
import React from 'react';
import PostCommentInput from './PostCommentInput';
import PostRatingBox from './PostRatingBox';

type Props = {
  post?: Post;
  isOpen: boolean;
  closeHandler: () => void;
  updatePost: (updatedPost: Post) => void;
};

const PostModal = ({ post, isOpen, closeHandler, updatePost }: Props) => {
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
          <Box display="flex" overflow="auto" width="100%" height="100%">
            {post?.content.imageUrl && (
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
            <Box display="flex" flexDirection="column" flexGrow="1">
              <Box
                display="flex"
                flexDirection="column"
                flexGrow="1"
                alignItems="center"
                width="100%"
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
