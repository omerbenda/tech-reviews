using System.Text.Json.Serialization;
using tech_reviews.Models;

namespace tech_reviews.DTO
{
    public class NewPostDTO
    {
        public PostContent Content { get; set; }
        public Guid AuthorId { get; set; }

        [JsonConstructor]
        public NewPostDTO(PostContent content, Guid authorId)
        {
            Content = content;
            AuthorId = authorId;
        }
    }
}
