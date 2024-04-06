using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using tech_reviews.DTO;
using tech_reviews.Models;

namespace tech_reviews.BL
{
    public class IdentityBL
    {
        private readonly UserBL _userBL;

        private readonly string TokenKey;

        public IdentityBL(UserBL userBL, IConfiguration configuration)
        {
            _userBL = userBL;
            TokenKey = configuration["JwtSettings:Key"]!;
        }

        public LoginResponseDTO? Login(LoginParamsDTO loginParams)
        {
            User? user = _userBL.GetUserByName(loginParams.Username);

            if (user == null)
            {
                return null;
            }

            return new LoginResponseDTO(GenerateToken(user), new UserDTO(user));
        }

        public string Register(NewUserDTO newUser)
        {
            User user = _userBL.AddUser(newUser);

            return GenerateToken(user);
        }

        public User? GetUserFromIdentity(ClaimsPrincipal user)
        {
            string id = user.FindFirst(ClaimTypes.NameIdentifier)?.Value!;

            return _userBL.GetUserById(Guid.Parse(id));
        }

        public string GenerateToken(User user)
        {
            JwtSecurityTokenHandler tokenHandler = new JwtSecurityTokenHandler();
            byte[] key = Encoding.UTF8.GetBytes(TokenKey);
            List<Claim> claims =
            [
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(JwtRegisteredClaimNames.Sub, user.Id.ToString()),
            ];

            SecurityTokenDescriptor tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                SigningCredentials =
                    new SigningCredentials(
                        new SymmetricSecurityKey(key),
                        SecurityAlgorithms.HmacSha256
                ),
            };

            SecurityToken token = tokenHandler.CreateToken(tokenDescriptor);
            string jwt = tokenHandler.WriteToken(token);

            return jwt;
        }
    }
}
