import { Box } from '@mui/material';
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
      <StarRating rating={rating} />
    </Box>
  );
};

export default PostRatingBox;
