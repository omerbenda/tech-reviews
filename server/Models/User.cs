namespace tech_reviews.Models
{
    public class User
    {
        public Guid Id { get; set; }
        public string Username { get; set; }
        public string? ImageUrl { get; set; }

        public User(Guid id, string username) : this(id, username, null) { }

        public User(Guid id, string username, string? imageUrl)
        {
            Id = id;
            Username = username;
            ImageUrl = imageUrl;
        }
    }
}
