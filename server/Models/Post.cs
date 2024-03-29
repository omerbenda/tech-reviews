namespace tech_reviews.Models
{
    public class Post
    {
        public Guid Id { get; set; }
        public User Author { get; set; }
        public PostContent Content { get; set; }
        public List<PostComment> Comments { get; set; }

        public Post(Guid id, User author, PostContent content)
            : this(id, author, content, new List<PostComment>()) { }

        public Post(Guid id, User author, PostContent content, List<PostComment> comments)
        {
            Id = id;
            Author = author;
            Content = content;
            Comments = comments;
        }
    }
}
