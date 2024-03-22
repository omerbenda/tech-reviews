import { Box, Typography } from '@mui/material';
import Navbar from '../../Common/Components/Navbar/Navbar';

const data = [
  {
    id: 0,
    author: { name: 'tester' },
    content: { title: 'test product' },
  },
  {
    id: 2,
    author: { name: 'dev' },
    content: { title: 'test product 2' },
  },
  {
    id: 1,
    author: { name: 'tester' },
    content: { title: 'extra product' },
  },
  {
    id: 3,
    author: { name: 'tester' },
    content: { title: 'test product' },
  },
  {
    id: 4,
    author: { name: 'tester' },
    content: { title: 'test product' },
  },
];

const FeedPage = () => {
  return (
    <Box height="100%">
      <Navbar />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        height="100%"
        sx={{overflowY: 'auto'}}
      >
        <Box minHeight="5px" height="5%" />
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          width="100%"
          height="100%"
          gap="20%"
        >
          {data.map((post) => (
            <Box
              display="flex"
              flexDirection="column"
              bgcolor="gray"
              width={{ xs: '75%', md: '35%', xl: '25%' }}
              key={post.id}
            >
              <Typography variant="h6" textAlign="center">{post.content.title}</Typography>
              <Typography variant="body2" textAlign="center">{post.author.name}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default FeedPage;
