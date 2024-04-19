import { Avatar, Box, Divider, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import User from '../../Common/Types/User/User';
import { useEffect, useState } from 'react';
import api from '../../Api/Api';
import Navbar from '../../Common/Components/Navbar/Navbar';
import PostList from '../../Common/Components/PostList/PostList';
import Post from '../../Common/Types/Post/Post';
import PostModal from '../../Common/Components/PostModal/PostModal';
import NewPostFab from '../../Common/Components/NewPost/NewPostFab/NewPostFab';
import NewPostModal from '../../Common/Components/NewPost/NewPostModal/NewPostModal';

const ProfilePage = () => {
  const [profileUser, setProfileUser] = useState<User>();
  const [userPosts, setUserPosts] = useState<Post[]>([]);
  const [postModaOpen, setPostModalOpen] = useState<boolean>(false);
  const [modalPost, setModalPost] = useState<Post>();
  const [isNewPostModalOpen, setNewPostModalOpen] = useState<boolean>(false);

  const { userId } = useParams();
  const navigate = useNavigate();

  const fetchProfileUser = async (userId: string) => {
    setProfileUser((await api.users.get(userId)).data);
  };

  const fetchUserPosts = async (userId: string) => {
    setUserPosts((await api.posts.getByUser(userId)).data);
  };

  useEffect(() => {
    if (userId) {
      fetchProfileUser(userId);
      fetchUserPosts(userId);
    }
  }, [userId]);

  const postClickHandler = (post: Post) => {
    setPostModalOpen(true);
    setModalPost(post);
  };

  const profileClickHandler = (userId: string) => {
    setPostModalOpen(false);
    navigate(`/profile/${userId}`);
  };

  const updatePost = (updatedPost: Post): void => {
    setUserPosts((curr) =>
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
          flexDirection="column"
          alignItems="center"
          overflow="hidden"
          height="100%"
          gap={1}
        >
          <Box />
          <Box display="flex" gap={2}>
            <Avatar
              src={profileUser?.imageUrl}
              alt="Profile Picture"
              sx={{ width: 128, height: 128 }}
            />
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              height="100%"
            >
              <Box>
                <Typography variant="h5">{profileUser?.username}</Typography>
              </Box>
            </Box>
          </Box>
          <Divider sx={{ width: '100%' }} />
          <PostList
            posts={userPosts}
            onPostOpen={postClickHandler}
            onProfileClick={profileClickHandler}
          />
        </Box>
      </Box>
      <PostModal
        isOpen={postModaOpen}
        closeHandler={() => setPostModalOpen(false)}
        post={modalPost}
        updatePost={updatePost}
        onCommentProfileClick={profileClickHandler}
      />
      <NewPostModal
        isOpen={isNewPostModalOpen}
        closeHandler={() => setNewPostModalOpen(false)}
      />
      <NewPostFab onClick={() => setNewPostModalOpen(true)} />
    </Box>
  );
};

export default ProfilePage;
