import { Box, Divider, Fab } from '@mui/material';
import Navbar from '../../Common/Components/Navbar/Navbar';
import Post from '../../Common/Types/Post/Post';
import PostList from '../../Common/Components/PostList/PostList';
import Sidebar from './Components/Sidebar/Sidebar';
import PostModal from '../../Common/Components/PostModal/PostModal';
import { useEffect, useState } from 'react';
import api from '../../Api/Api';
import { Add } from '@mui/icons-material';
import NewPostModal from '../../Common/Components/NewPostModal/NewPostModal';

const FeedPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isPostModalOpen, setPostModalOpen] = useState<boolean>(false);
  const [modalPost, setModalPost] = useState<Post>();
  const [isNewPostModalOpen, setNewPostModalOpen] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setPosts((await api.posts.get()).data);
    })();
  }, []);

  const postClickHandler = (post: Post) => {
    setPostModalOpen(true);
    setModalPost(post);
  };

  const newPostButtonHandler = () => {
    setNewPostModalOpen(true);
  };

  return (
    <Box height="100%">
      <Box display="flex" flexDirection="column" height="100%">
        <Navbar />
        <Box
          display="flex"
          flexDirection="row"
          overflow="hidden"
          gap="10px"
          height="100%"
        >
          <Sidebar users={[]} />
          <Divider orientation="vertical" />
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={2}
            width="100%"
          >
            <Box />
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              width="100%"
            >
              <Fab color="primary" onClick={newPostButtonHandler}>
                <Add />
              </Fab>
            </Box>
            <Box />
            <PostList posts={posts} onPostOpen={postClickHandler} />
          </Box>
        </Box>
      </Box>
      <PostModal
        isOpen={isPostModalOpen}
        closeHandler={() => setPostModalOpen(false)}
        post={modalPost}
      />
      <NewPostModal
        isOpen={isNewPostModalOpen}
        closeHandler={() => setNewPostModalOpen(false)}
      />
    </Box>
  );
};

export default FeedPage;
