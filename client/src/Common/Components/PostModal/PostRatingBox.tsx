import { Favorite } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import StarRating from '../StarRating/StarRating';

type Props = {
  rating: number;
};

const PostRatingBox = ({ rating }: Props) => {
  return (
    <Box
      display="flex"
      justifyContent="space-evenly"
      alignItems="center"
      width="100%"
      height="10%"
    >
      <IconButton aria-label="like">
        <Favorite />
      </IconButton>
      <StarRating rating={rating} />
    </Box>
  );
};

export default PostRatingBox;
