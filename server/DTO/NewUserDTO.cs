using System.Text.Json.Serialization;
using tech_reviews.Models;

namespace tech_reviews.DTO
{
    public class NewUserDTO
    {
        public string Username { get; set; }

        [JsonConstructor]
        public NewUserDTO(string username)
        {
            Username = username;
        }
    }
}
