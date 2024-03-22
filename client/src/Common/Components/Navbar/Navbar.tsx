import { AppBar, Container, Toolbar, Typography } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{ m: 0 }}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
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
