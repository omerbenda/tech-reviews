using tech_reviews.DAL;
using tech_reviews.Models;

namespace tech_reviews.BL
{
    public class PostBL
    {
        private readonly PostDAL _postDAL;

        public PostBL(PostDAL postDAL)
        {
            _postDAL = postDAL;
        }

        public List<Post> GetPosts()
        {
            return _postDAL.GetPosts();
        }
    }
}
