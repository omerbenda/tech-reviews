import { Star } from '@mui/icons-material';
import { Box } from '@mui/material';

const STAR_COUNT = 5;

const createStars: (
  rating: number,
  onSelection?: (starCount: number) => void
) => JSX.Element[] = (
  rating: number,
  onSelection?: (starCount: number) => void
) => {
  const stars: JSX.Element[] = [];

  for (let iter = 0; iter < STAR_COUNT; iter++) {
    stars.push(
      <Box onClick={() => onSelection?.(iter + 1)} key={iter}>
        <Star
          sx={{
            transition: 'ease',
            transitionDuration: '650ms',
            color: rating > iter ? 'gold' : '#b0b0b0',
          }}
        />
      </Box>
    );
  }

  return stars;
};

type Props = {
  rating: number;
  onSelection?: (starCount: number) => void;
};

const StarRating = ({ rating, onSelection }: Props) => {
  return (
    <Box display="flex" gap={1}>
      {createStars(rating, onSelection)}
    </Box>
  );
};

export default StarRating;
