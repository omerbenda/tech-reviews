import React, { useCallback, useEffect } from 'react';
import { CssBaseline } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import router from './Router';
import { useGeneralStore } from './Stores/GeneralStore';
import api from './Api/Api';

const App = () => {
  const currentUser = useGeneralStore((state) => state.currentUser);
  const setCurrentUser = useGeneralStore((state) => state.setCurrentUser);

  const setUserFromToken: () => Promise<void> = useCallback(async () => {
    return setCurrentUser((await api.identity.getSelf()).data);
  }, [setCurrentUser]);

  const checkUserExists = useCallback(async () => {
    if (!currentUser) {
      if (document.cookie) {
        try {
          await setUserFromToken();
          router.navigate('/feed');
        } catch (e) {
          router.navigate('/');
        }
      }
    }
  }, [currentUser, setUserFromToken]);

  useEffect(() => {
    checkUserExists();
  }, [checkUserExists]);

  return (
    <React.StrictMode>
      <CssBaseline />
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

export default App;
