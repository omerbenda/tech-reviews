import React, { useCallback, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './Router';
import { useGeneralStore } from './Stores/GeneralStore';
import api from './Api/Api';
import ThemeController from './Common/Components/ThemeController/ThemeController';

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
      <ThemeController>
        <RouterProvider router={router} />
      </ThemeController>
    </React.StrictMode>
  );
};

export default App;
