import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import User from '../../Common/Types/User/User';
import { useEffect, useState } from 'react';
import api from '../../Api/Api';

const ProfilePage = () => {
  const { userId } = useParams();

  const [profileUser, setProfileUser] = useState<User>();

  const updateProfileUser = async (userId: string) => {
    setProfileUser((await api.users.get(userId)).data);
  };

  useEffect(() => {
    if (userId) {
      updateProfileUser(userId);
    }
  }, [userId]);

  return <Box height="100%">{profileUser?.username}</Box>;
};

export default ProfilePage;
