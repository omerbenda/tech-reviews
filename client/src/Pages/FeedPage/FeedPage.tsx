import { Box, Divider } from '@mui/material';
import Navbar from '../../Common/Components/Navbar/Navbar';
import Post from '../../Common/Types/Post/Post';
import User from '../../Common/Types/User/User';
import PostList from '../../Common/Components/PostList/PostList';
import Sidebar from './Components/Sidebar/Sidebar';
import PostModal from '../../Common/Components/PostModal/PostModal';
import { useState } from 'react';

const users: User[] = [
  {
    id: '0',
    username: 'tester',
  },
  {
    id: '1',
    username: 'dev',
  },
  {
    id: '2',
    username: 'last',
  },
];

const data: Post[] = [
  {
    id: '0',
    author: users[0],
    content: {
      title: 'interseting product',
      body: 'this is very interseting',
      reviewerRating: 5,
    },
    comments: [],
  },
  {
    id: '1',
    author: users[0],
    content: { title: 'another product', body: 'yes', reviewerRating: 3 },
    comments: [],
  },
  {
    id: '2',
    author: users[1],
    content: { title: 'new product', body: 'no', reviewerRating: 0 },
    comments: [],
  },
  {
    id: '2',
    author: users[1],
    content: { title: 'new product', body: 'no', reviewerRating: 0 },
    comments: [],
  },
  {
    id: '2',
    author: users[1],
    content: { title: 'new product', body: 'no', reviewerRating: 0 },
    comments: [],
  },
  {
    id: '2',
    author: users[2],
    content: { title: 'last', body: 'no', reviewerRating: 0 },
    comments: [],
  },
];

const FeedPage = () => {
  const [isPostModalOpen, setPostModalOpen] = useState<boolean>(false);
  const [modalPost, setModalPost] = useState<Post>();

  const postClickHandler = (post: Post) => {
    setPostModalOpen(true);
    setModalPost(post);
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
          <Sidebar users={users} />
          <Divider orientation="vertical" />
          <PostList posts={data} onPostOpen={postClickHandler} />
        </Box>
      </Box>
      <PostModal
        isOpen={isPostModalOpen}
        closeHandler={() => setPostModalOpen(false)}
        post={modalPost}
      />
    </Box>
  );
};

export default FeedPage;
