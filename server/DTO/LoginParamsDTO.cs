using System.Text.Json.Serialization;

namespace tech_reviews.DTO
{
    public class LoginParamsDTO
    {
        public string Username { get; set; }

        [JsonConstructor]
        public LoginParamsDTO(string username)
        {
            Username = username;
        }
    }
}
