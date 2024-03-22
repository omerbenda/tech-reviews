import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from '@mui/material';
import Post from '../../Types/Post/Post';
import { Favorite } from '@mui/icons-material';

type Props = {
  post: Post;
};

const PostCard = ({ post }: Props) => {
  return (
    <Card elevation={6} sx={{ width: { xs: '75%', md: '35%', xl: '25%' } }}>
      <CardHeader
        avatar={<Avatar src={post.author.imageUrl} />}
        title={<Typography variant="h6">{post.author.username}</Typography>}
      />
      <CardContent>
        <Box display="flex" flexDirection="column" key={post.id}>
          <Typography variant="h5" textAlign="center">
            {post.content.title}
          </Typography>
          <Typography variant="h6" textAlign="center">
            {post.content.body}
          </Typography>
        </Box>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="like">
          <Favorite />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default PostCard;
