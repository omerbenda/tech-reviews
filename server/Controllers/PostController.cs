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
            return _postBL.GetPostsByDate();
        }

        [HttpGet("by/{userId:guid}")]
        public ActionResult<List<Post>> GetPostsByUser(Guid userId)
        {
            return _postBL.GetPostsByUser(userId);
        }

        [HttpPost]
        public ActionResult<Post> AddPost([FromBody] NewPostDTO post)
        {
            try
            {
                return _postBL.AddPostByUser(post, User);
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

        [HttpPost("comment")]
        public ActionResult<Post> AddCommentToPost([FromBody] NewCommentDTO commentDTO)
        {
            Post? updatedPost = _postBL.AddCommentToPost(commentDTO, User);

            if (updatedPost == null)
            {
                return BadRequest();
            }

            return updatedPost;
        }
    }
}
