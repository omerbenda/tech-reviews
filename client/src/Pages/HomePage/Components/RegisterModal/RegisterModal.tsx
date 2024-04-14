import { useRef, useState } from 'react';
import {
  Box,
  Button,
  Divider,
  Modal,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import api from '../../../../Api/Api';
import { useGeneralStore } from '../../../../Stores/GeneralStore';
import { useNavigate } from 'react-router-dom';
import User from '../../../../Common/Types/User/User';
import { useCookies } from 'react-cookie';

type Props = {
  isOpen: boolean;
  closeHandler: () => void;
};

const RegisterModal = ({ isOpen, closeHandler }: Props) => {
  const [imageUrl, setImageUrl] = useState<string>('');
  const usernameInputRef = useRef<HTMLInputElement>();

  const [, setCookie] = useCookies(['token']);

  const setUser: (user: User) => void = useGeneralStore(
    (state) => state.setCurrentUser
  );

  const navigate = useNavigate();

  const register = async () => {
    if (usernameInputRef.current) {
      const token: string = (
        await api.identity.register({
          username: usernameInputRef.current.value,
          imageUrl,
        })
      ).data;

      setCookie('token', `${token}`);

      setUser((await api.identity.getSelf()).data);
      navigate('/feed');
    }
  };

  return (
    <Modal open={isOpen} onClose={closeHandler}>
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
        <Paper
          elevation={8}
          sx={{ overflowY: 'hidden', width: '100%', height: '100%' }}
        >
          <Box
            display="flex"
            flexDirection="column"
            overflow="auto"
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
              gap={2}
              width="100%"
            >
              <TextField
                label="Username"
                variant="filled"
                inputRef={usernameInputRef}
              />
              <Divider sx={{ width: '100%' }} />
              <Box
                display="flex"
                justifyContent="space-evenly"
                flexWrap="wrap"
                flexGrow="1"
                gap={1}
                width="100%"
                overflow="auto"
              >
                <TextField
                  label="Image URL"
                  variant="filled"
                  onChange={(e) => setImageUrl(e.target.value)}
                />
                {imageUrl && (
                  <Box
                    component="img"
                    src={imageUrl}
                    width="75%"
                    sx={{ objectFit: 'fit' }}
                  />
                )}
              </Box>
              <Divider sx={{ width: '100%' }} />
              <Button variant="contained" onClick={register}>
                Register
              </Button>
              <Box />
            </Box>
          </Box>
        </Paper>
      </Box>
    </Modal>
  );
};

export default RegisterModal;
