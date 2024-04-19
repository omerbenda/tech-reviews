import { Add } from '@mui/icons-material';
import { Box, Fab } from '@mui/material';

type Props = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const NewPostFab = ({ onClick }: Props) => {
  return (
    <Box position="fixed" right="4%" bottom="4%">
      <Fab color="primary" onClick={onClick}>
        <Add />
      </Fab>
    </Box>
  );
};

export default NewPostFab;
