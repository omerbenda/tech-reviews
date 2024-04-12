import {
  AppBar,
  Avatar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useGeneralStore } from '../../../Stores/GeneralStore';

const Navbar = () => {
  const currentUser = useGeneralStore((state) => state.currentUser);

  const navigate = useNavigate();

  const handleTitleClick = () => {
    navigate('/'); // todo remove
  };

  const handleProfileClick = () => {
    navigate(`/profile/${currentUser?.id}`);
  };

  return (
    <AppBar position="static">
      <Container maxWidth={false} sx={{ m: 0 }}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            onClick={handleTitleClick}
            sx={{ cursor: 'pointer', userSelect: 'none' }}
          >
            Tech Reviews
          </Typography>
          <Box flexGrow="1" />
          {currentUser && (
            <Box flexGrow="0">
              <IconButton onClick={handleProfileClick}>
                <Avatar alt="Profile" src={currentUser.imageUrl} />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
