using System.Text.Json.Serialization;

namespace tech_reviews.Models
{
    public class PostContent
    {
        public string Title { get; set; }
        public string Body { get; set; }
        public int ReviewerRating { get; set; }
        public string? ImageUrl { get; set; }

        public PostContent(string title, string body, int reviewerRating)
            : this(title, body, reviewerRating, null) { }

        [JsonConstructor]
        public PostContent(string title, string body, int reviewerRating, string? imageUrl)
        {
            Title = title;
            Body = body;
            ReviewerRating = reviewerRating;
            ImageUrl = imageUrl;
        }
    }
}
