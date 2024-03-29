namespace tech_reviews.Models
{
    public class PostComment
    {
        public Guid Id { get; set; }
        public User Author { get; set; }
        public string Body { get; set; }

        public PostComment(Guid id, User author, string body)
        {
            Id = id;
            Author = author;
            Body = body;
        }
    }
}
