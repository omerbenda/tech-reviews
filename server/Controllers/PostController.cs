using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using tech_reviews.BL;
using tech_reviews.DTO;
using tech_reviews.Models;

namespace tech_reviews.Controllers
{
    [Authorize]
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
        public ActionResult<List<Post>> Get()
        {
            return _postBL.GetPosts();
        }

        [HttpPost]
        public ActionResult<Post> AddPost([FromBody] NewPostDTO post)
        {
            try
            {
                return _postBL.AddPost(post);
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
            catch
            {
                return Problem(statusCode: 500);
            }
        }
    }
}
