import { Star } from '@mui/icons-material';
import { Box } from '@mui/material';

const STAR_COUNT = 5;

const createStars: (rating: number) => JSX.Element[] = (rating: number) => {
  const stars: JSX.Element[] = [];

  for (let iter = 0; iter < STAR_COUNT; iter++) {
    stars.push(<Star sx={{ color: rating > iter ? 'gold' : '#b0b0b0' }} key={iter} />);
  }

  return stars;
};

type Props = {
  rating: number;
};

const StarRating = ({ rating }: Props) => {
  return (
    <Box display="flex" gap={1}>
      {createStars(rating)}
    </Box>
  );
};

export default StarRating;
