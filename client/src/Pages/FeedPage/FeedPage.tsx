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
import { useGeneralStore } from '../../Stores/GeneralStore';
import User from '../../Common/Types/User/User';

const FeedPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isPostModalOpen, setPostModalOpen] = useState<boolean>(false);
  const [modalPost, setModalPost] = useState<Post>();
  const [isNewPostModalOpen, setNewPostModalOpen] = useState<boolean>(false);

  const currentUser: User | undefined = useGeneralStore(
    (state) => state.currentUser
  );

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

  const updatePost = (updatedPost: Post): void => {
    setPosts((curr) =>
      curr.map((post) => {
        return post.id === updatedPost.id ? updatedPost : post;
      })
    );

    if (updatedPost.id === modalPost?.id) {
      setModalPost(updatedPost);
    }
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
          <Sidebar users={currentUser ? [currentUser] : []} />
          <Divider orientation="vertical" />
          <PostList posts={posts} onPostOpen={postClickHandler} />
        </Box>
      </Box>
      <PostModal
        isOpen={isPostModalOpen}
        closeHandler={() => setPostModalOpen(false)}
        post={modalPost}
        updatePost={updatePost}
      />
      <NewPostModal
        isOpen={isNewPostModalOpen}
        closeHandler={() => setNewPostModalOpen(false)}
      />
      <Box position="fixed" right="4%" bottom="4%">
        <Fab color="primary" onClick={newPostButtonHandler}>
          <Add />
        </Fab>
      </Box>
    </Box>
  );
};

export default FeedPage;
