import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleTitleClick = () => {
    navigate('/'); // todo remove
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{ m: 0 }}>
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
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
