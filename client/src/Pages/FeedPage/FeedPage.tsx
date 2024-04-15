import { Box, Divider } from '@mui/material';
import Navbar from '../../Common/Components/Navbar/Navbar';
import Post from '../../Common/Types/Post/Post';
import PostList from '../../Common/Components/PostList/PostList';
import Sidebar from './Components/Sidebar/Sidebar';
import PostModal from '../../Common/Components/PostModal/PostModal';
import { useEffect, useState } from 'react';
import api from '../../Api/Api';
import NewPostModal from '../../Common/Components/NewPost/NewPostModal/NewPostModal';
import { useGeneralStore } from '../../Stores/GeneralStore';
import User from '../../Common/Types/User/User';
import NewPostFab from '../../Common/Components/NewPost/NewPostFab/NewPostFab';
import { useNavigate } from 'react-router-dom';

const FeedPage = () => {
  const [posts, setPosts] = useState<Post[]>([]); // TODO: switch to post headers here
  const [isPostModalOpen, setPostModalOpen] = useState<boolean>(false);
  const [modalPost, setModalPost] = useState<Post>();
  const [isNewPostModalOpen, setNewPostModalOpen] = useState<boolean>(false);

  const navigate = useNavigate();

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

  const profileClickHandler = (userId: string) => {
    navigate(`/profile/${userId}`);
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
          <Box width="10%">
            <Sidebar users={currentUser ? [currentUser] : []} />
          </Box>
          <Divider orientation="vertical" />
          <PostList
            posts={posts}
            onPostOpen={postClickHandler}
            onProfileClick={profileClickHandler}
          />
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
      <NewPostFab onClick={() => setNewPostModalOpen(true)} />
    </Box>
  );
};

export default FeedPage;
