using System.Text.Json.Serialization;
using tech_reviews.Models;

namespace tech_reviews.DTO
{
    public class NewUserDTO
    {
        public string Username { get; set; }
        public string ImageUrl { get; set; }

        [JsonConstructor]
        public NewUserDTO(string username, string imageUrl)
        {
            Username = username;
            ImageUrl = imageUrl;
        }
    }
}
