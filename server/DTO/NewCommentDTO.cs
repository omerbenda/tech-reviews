using System.Text.Json.Serialization;

namespace tech_reviews.DTO
{
    public class NewCommentDTO
    {
        public Guid PostId { get; set; }
        public string Body { get; set; }

        [JsonConstructor]
        public NewCommentDTO(Guid postId, string body)
        {
            PostId = postId;
            Body = body;
        }
    }
}
