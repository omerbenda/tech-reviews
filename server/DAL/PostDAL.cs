using tech_reviews.Models;

namespace tech_reviews.DAL
{
    public class PostDAL
    {
        public PostDAL() { }

        public List<Post> GetPosts()
        {
            return DataManager.Posts;
        }

        public IOrderedEnumerable<Post> GetPostByDateDesc()
        {
            return SortPostsByDate(DataManager.Posts);
        }

        public IOrderedEnumerable<Post> GetPostsByUser(Guid userId)
        {
            return SortPostsByDate(DataManager.Posts.Where(post => post.Author.Id.Equals(userId)).ToList());
        }

        public void AddPost(Post post)
        {
            DataManager.Posts.Add(post);
        }

        public Post? GetPostById(Guid id)
        {
            return DataManager.Posts.FirstOrDefault(post => post.Id.Equals(id));
        }

        public Post? AddCommentToPost(Guid postId, PostComment comment)
        {
            Post? post = GetPostById(postId);

            if (post == null)
            {
                return null;
            }

            post.Comments.Add(comment);

            return post;
        }

        private static IOrderedEnumerable<Post> SortPostsByDate(IEnumerable<Post> posts)
        {
            return
                from post in posts
                orderby post.CreationTime descending
                select post;
        }
    }
}
