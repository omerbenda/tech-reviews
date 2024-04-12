import { Box, Typography } from '@mui/material';
import User from '../../../../Common/Types/User/User';

type Props = {
  users: User[];
};

const Sidebar = ({ users }: Props) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      height="100%"
      sx={{ overflowY: 'auto' }}
    >
      <Typography variant="h5">Users:</Typography>
      {users.map((user) => (
        <Typography variant="h6" key={user.id}>
          * {user.username}
        </Typography>
      ))}
    </Box>
  );
};

export default Sidebar;
