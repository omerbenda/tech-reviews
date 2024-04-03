import { Box, Button, TextField } from '@mui/material';
import Navbar from '../../Common/Components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import api from '../../Api/Api';
import { useGeneralStore } from '../../Stores/GeneralStore';
import User from '../../Common/Types/User/User';
import RegisterModal from './Components/RegisterModal/RegisterModal';

const HomePage = () => {
  const [registerModalOpen, setRegisterModalOpen] = useState<boolean>(false);
  const usernameInputRef = useRef<HTMLInputElement>();

  const setUser: (user: User) => void = useGeneralStore(
    (state) => state.setUser
  );

  const navigate = useNavigate();

  const login = async () => {
    if (usernameInputRef.current) {
      const user: User = (
        await api.users.login({
          username: usernameInputRef.current.value,
        })
      ).data;

      setUser(user);
      navigate('feed');
    }
  };

  return (
    <Box display="flex" flexDirection="column" height="100%">
      <Navbar />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100%"
        gap={3}
      >
        <TextField label="Username" inputRef={usernameInputRef} />
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={login}
        >
          Login
        </Button>
        <Button
          variant="text"
          color="secondary"
          onClick={() => setRegisterModalOpen(true)}
          sx={{ p: 0 }}
        >
          Create an account
        </Button>
      </Box>
      <RegisterModal
        open={registerModalOpen}
        closeHandler={() => setRegisterModalOpen(false)}
      />
    </Box>
  );
};

export default HomePage;
