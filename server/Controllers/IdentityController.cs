﻿using Microsoft.AspNetCore.Mvc;
using tech_reviews.BL;
using tech_reviews.DTO;
using tech_reviews.Models;

namespace tech_reviews.Controllers
{
    [ApiController]
    [Route("identity")]
    public class IdentityController : ControllerBase
    {
        private readonly IdentityBL _identityBL;

        public IdentityController(IdentityBL identityBL, IConfiguration config)
        {
            _identityBL = identityBL;
        }

        [HttpPost("login")]
        public ActionResult<LoginResponseDTO> Login([FromBody] LoginParamsDTO loginParams)
        {
            LoginResponseDTO? response = _identityBL.Login(loginParams);

            if (response == null)
            {
                return Unauthorized();
            }

            return response;
        }

        [HttpPost("register")]
        public ActionResult<string> Register([FromBody] NewUserDTO newUser)
        {
            try
            {
                return _identityBL.Register(newUser);
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

        [HttpGet("user")]
        public ActionResult<UserDTO> GetUserFromToken()
        {
            User? user = _identityBL.GetUserFromIdentity(User);

            if (user == null)
            {
                return NotFound();
            }

            return Ok(new UserDTO(user));
        }
    }
}
