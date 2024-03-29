using Microsoft.AspNetCore.Mvc;
using tech_reviews.BL;
using tech_reviews.DTO;
using tech_reviews.Models;

namespace tech_reviews.Controllers
{
    [ApiController]
    [Route("post")]
    public class PostController : ControllerBase
    {
        private readonly PostBL _postBL;
        
        public PostController(PostBL postBL)
        {
            _postBL = postBL;
        }

        [HttpGet]
        public List<Post> Get()
        {
            return _postBL.GetPosts();
        }

        [HttpPost]
        public Post AddPost([FromBody] NewPostDTO post)
        {
            return _postBL.AddPost(post);
        }
    }
}
