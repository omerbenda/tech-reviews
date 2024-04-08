namespace tech_reviews.Models
{
    public class PostComment
    {
        public Guid Id { get; set; }
        public User User { get; set; }
        public string Body { get; set; }

        public PostComment(Guid id, User user, string body)
        {
            Id = id;
            User = user;
            Body = body;
        }
    }
}
