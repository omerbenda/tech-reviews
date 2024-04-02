using tech_reviews.DAL;
using tech_reviews.DTO;
using tech_reviews.Models;

namespace tech_reviews.BL
{
    public class PostBL
    {
        private readonly PostDAL _postDAL;
        private readonly UserDAL _userDAL;

        public PostBL(PostDAL postDAL, UserDAL userDAL)
        {
            _postDAL = postDAL;
            _userDAL = userDAL;
        }

        public List<Post> GetPosts()
        {
            return _postDAL.GetPosts();
        }

        public Post AddPost(NewPostDTO newPost)
        {
            User author = _userDAL.GetUserById(newPost.AuthorId)
                            ?? throw new ArgumentException("Non-existent user id");
            Post post = new Post(Guid.NewGuid(), author, newPost.Content);
            _postDAL.AddPost(post);

            return post;
        }
    }
}
