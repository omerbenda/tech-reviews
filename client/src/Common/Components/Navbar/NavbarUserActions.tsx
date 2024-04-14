import { useState } from 'react';
import { Settings } from '@mui/icons-material';
import { Box, IconButton, Menu, MenuItem, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import User from '../../Types/User/User';
import { useGeneralStore } from '../../../Stores/GeneralStore';
import { useCookies } from 'react-cookie';

type Props = {
  currentUser?: User;
};

const NavbarUserActions = ({ currentUser }: Props) => {
  const [menuAnchor, setMenuAnchor] = useState<HTMLElement>();

  const setCurrentUser = useGeneralStore((state) => state.setCurrentUser);
  const [, , removeCookie] = useCookies(['token']);

  const navigate = useNavigate();

  const handleMenuClose = () => {
    setMenuAnchor(undefined);
  };

  const handleProfileClick = () => {
    navigate(`/profile/${currentUser?.id}`);
  };

  const logout = () => {
    setCurrentUser(undefined);
    removeCookie('token');
    navigate('/');
  };

  return (
    <Box display="flex" alignItems="center" gap={1}>
      <Box>
        <IconButton onClick={(e) => setMenuAnchor(e.currentTarget)}>
          <Settings />
        </IconButton>
        <Menu
          open={!!menuAnchor}
          onClose={handleMenuClose}
          anchorEl={menuAnchor}
        >
          <MenuItem onClick={logout}>Log Out</MenuItem>
        </Menu>
      </Box>
      <IconButton onClick={handleProfileClick}>
        <Avatar alt="Profile" src={currentUser?.imageUrl} />
      </IconButton>
    </Box>
  );
};

export default NavbarUserActions;
