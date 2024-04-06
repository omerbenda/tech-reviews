using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using tech_reviews.BL;
using tech_reviews.DTO;
using tech_reviews.Models;

namespace tech_reviews.Controllers
{
    [Authorize]
    [ApiController]
    [Route("user")]
    public class UserController : ControllerBase
    {
        private readonly UserBL _userBL;

        public UserController(UserBL userBL)
        {
            _userBL = userBL;
        }

        [HttpGet("{userId:guid}")]
        public ActionResult<UserDTO> GetUser(Guid userId)
        {
            User? user = _userBL.GetUserById(userId);

            if (user == null)
            {
                return NotFound("User not found");
            }

            return new UserDTO(user);
        }
    }
}
