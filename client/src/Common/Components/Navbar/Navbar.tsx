import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useGeneralStore } from '../../../Stores/GeneralStore';
import NavbarUserActions from './NavbarUserActions';

const Navbar = () => {
  const currentUser = useGeneralStore((state) => state.currentUser);

  const navigate = useNavigate();

  const handleTitleClick = () => {
    if (currentUser) {
      navigate('/feed');
    } else {
      navigate('/');
    }
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
          {currentUser && <NavbarUserActions user={currentUser} />}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
