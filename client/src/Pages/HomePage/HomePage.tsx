import { Box, Button } from '@mui/material';
import Navbar from '../../Common/Components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Box height="100%">
      <Navbar />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100%"
      >
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => navigate('feed')}
        >
          Enter
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
