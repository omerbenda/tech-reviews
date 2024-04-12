import { Box, Button, TextField } from '@mui/material';
import Navbar from '../../Common/Components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import api from '../../Api/Api';
import { useGeneralStore } from '../../Stores/GeneralStore';
import User from '../../Common/Types/User/User';
import RegisterModal from './Components/RegisterModal/RegisterModal';
import LoginResponse from '../../Common/Types/Identity/LoginResponse';
import { useCookies } from 'react-cookie';

const HomePage = () => {
  const [registerModalOpen, setRegisterModalOpen] = useState<boolean>(false);
  const usernameInputRef = useRef<HTMLInputElement>();

  const [, setCookie] = useCookies(['token']);

  const setCurrentUser: (user: User) => void = useGeneralStore(
    (state) => state.setCurrentUser
  );

  const navigate = useNavigate();

  const login = async () => {
    if (usernameInputRef.current) {
      const loginResponse: LoginResponse = (
        await api.identity.login({
          username: usernameInputRef.current.value,
        })
      ).data;

      setCookie('token', `${loginResponse.token}`);
      setCurrentUser(loginResponse.user);
      navigate('/feed');
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
        isOpen={registerModalOpen}
        closeHandler={() => setRegisterModalOpen(false)}
      />
    </Box>
  );
};

export default HomePage;
