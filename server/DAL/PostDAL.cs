using tech_reviews.Models;

namespace tech_reviews.DAL
{
    public class PostDAL
    {
        public PostDAL() { }

        public List<Post> GetPosts()
        {
            return DataManger.Posts;
        }

        public Post AddPost(Post post)
        {
            DataManger.Posts.Add(post);

            return post;
        }
    }
}
