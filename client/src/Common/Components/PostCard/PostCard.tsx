import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Collapse,
  Divider,
  IconButton,
  Typography,
} from '@mui/material';
import Post from '../../Types/Post/Post';
import { Favorite } from '@mui/icons-material';
import StarRating from '../StarRating/StarRating';
import { useState } from 'react';

type Props = {
  post: Post;
};

const PostCard = ({ post }: Props) => {
  const [isExpanded, setExpanded] = useState<boolean>(false);

  return (
    <Box display="flex" justifyContent="center" p={1}>
      <Card elevation={6} sx={{ width: { xs: '75%', md: '55%', xl: '35%' } }}>
        <CardHeader
          avatar={<Avatar src={post.author.imageUrl} />}
          title={<Typography variant="h6">{post.author.username}</Typography>}
        />
        <Divider sx={{ mx: 2 }} />
        <CardActions disableSpacing>
          <IconButton aria-label="like">
            <Favorite />
          </IconButton>
          <Box display="flex" flexGrow="1" />
          <StarRating rating={post.content.reviewerRating} />
        </CardActions>
        <Divider sx={{ mx: 2 }} />
        <CardContent>
          <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
            <Typography variant="h5" textAlign="center" textOverflow="ellipsis" width="100%">
              {post.content.title}
            </Typography>
            <Button
              variant="text"
              size="small"
              onClick={() => setExpanded((currVal) => !currVal)}
              sx={{ color: 'gray' }}
            >
              {isExpanded ? 'Less' : 'More'}
            </Button>
          </Box>
        </CardContent>
        <Collapse in={isExpanded} timeout="auto" unmountOnExit>
          <Divider sx={{ mx: 2 }} />
          <CardContent>
            <Typography variant="h6" textAlign="center">
              {post.content.body}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Box>
  );
};

export default PostCard;
