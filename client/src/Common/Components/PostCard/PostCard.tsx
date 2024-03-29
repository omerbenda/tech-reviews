import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Divider,
  IconButton,
  Typography,
} from '@mui/material';
import Post from '../../Types/Post/Post';
import { Comment, Favorite } from '@mui/icons-material';
import { useState } from 'react';
import StarRating from '../StarRating/StarRating';

type Props = {
  post: Post;
  onPostOpen: (post: Post) => void;
};

const PostCard = ({ post, onPostOpen }: Props) => {
  const [isExpanded, setExpanded] = useState<boolean>(false);

  return (
    <Box display="flex" justifyContent="center" p={1}>
      <Card elevation={6} sx={{ width: { xs: '75%', md: '55%', xl: '35%' } }}>
        <CardHeader
          avatar={<Avatar src={post.author.imageUrl} />}
          title={<Typography variant="h6">{post.author.username}</Typography>}
        />
        {post.content.imageUrl && (
          <>
            <CardMedia
              component="img"
              image={post.content.imageUrl}
              alt={post.content.title}
            />
            <Divider sx={{ mx: 2 }} />
          </>
        )}
        <Typography
          variant="body1"
          fontWeight="600"
          textAlign="center"
          overflow="hidden"
          textOverflow="ellipsis"
          py={1}
        >
          {post.content.title}
        </Typography>
        <Divider sx={{ mx: 2 }} />
        <CardActions disableSpacing>
          <IconButton aria-label="like">
            <Favorite />
          </IconButton>
          <IconButton aria-label="comments" onClick={() => onPostOpen(post)}>
            <Comment />
          </IconButton>
          <Box display="flex" flexGrow="1" />
          <StarRating rating={post.content.reviewerRating} />
        </CardActions>
        <Divider sx={{ mx: 2 }} />
        <CardContent>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={2}
          >
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
            <Typography
              variant="body2"
              textAlign="center"
              overflow="hidden"
              textOverflow="ellipsis"
            >
              {post.content.body}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Box>
  );
};

export default PostCard;
