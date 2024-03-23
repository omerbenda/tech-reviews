import { Star } from '@mui/icons-material';
import { Box } from '@mui/material';

type Props = {
  rating: number;
};

const StarRating = ({ rating }: Props) => {
  return (
    <Box display="flex" gap={1}>
      <Star sx={{ color: rating >= 1 ? 'gold' : 'black' }} />
      <Star sx={{ color: rating >= 2 ? 'gold' : 'black' }} />
      <Star sx={{ color: rating >= 3 ? 'gold' : 'black' }} />
      <Star sx={{ color: rating >= 4 ? 'gold' : 'black' }} />
      <Star sx={{ color: rating >= 5 ? 'gold' : 'black' }} />
    </Box>
  );
};

export default StarRating;
