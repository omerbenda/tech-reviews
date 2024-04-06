import { useRef } from 'react';
import {
  Box,
  Button,
  Modal,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import api from '../../../../Api/Api';
import { useGeneralStore } from '../../../../Stores/GeneralStore';
import { useNavigate } from 'react-router-dom';
import User from '../../../../Common/Types/User/User';

type Props = {
  open: boolean;
  closeHandler: () => void;
};

const RegisterModal = ({ open, closeHandler }: Props) => {
  const usernameInputRef = useRef<HTMLInputElement>();

  const setUser: (user: User) => void = useGeneralStore(
    (state) => state.setCurrentUser
  );

  const navigate = useNavigate();

  const register = async () => {
    if (usernameInputRef.current) {
      const user: User = (
        await api.users.register({
          username: usernameInputRef.current.value,
        })
      ).data;

      setUser(user);
      navigate('feed');
    }
  };

  return (
    <Modal open={open} onClose={closeHandler}>
      <Box
        position="absolute"
        top="50%"
        left="50%"
        width={{ xs: '75%', md: '35%' }}
        height="75%"
        sx={{
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Paper elevation={8} sx={{ width: '100%', height: '100%' }}>
          <Box
            display="flex"
            flexDirection="column"
            gap={1}
            width="100%"
            height="100%"
          >
            <Box />
            <Typography variant="h5" textAlign="center">
              Register To Tech Reviews!
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              flexGrow="1"
              justifyContent="center"
              alignItems="center"
              overflow="hidden"
              gap={3}
              width="100%"
            >
              <TextField label="Username" inputRef={usernameInputRef} />
              <Button variant="contained" onClick={register}>
                Register
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Modal>
  );
};

export default RegisterModal;
