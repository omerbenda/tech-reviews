using System.Text.Json.Serialization;
using tech_reviews.Models;

namespace tech_reviews.DTO
{
    public class UserDTO
    {
        public Guid Id { get; set; }
        public string Username { get; set; }
        public string? ImageUrl { get; set; }

        public UserDTO(User user) : this(user.Id, user.Username, user.ImageUrl) { }

        public UserDTO(Guid id, string username, string? imageUrl)
        {
            Id = id;
            Username = username;
            ImageUrl = imageUrl;
        }
    }
}
