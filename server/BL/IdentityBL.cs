using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using tech_reviews.DAL;
using tech_reviews.DTO;
using tech_reviews.Models;

namespace tech_reviews.BL
{
    public class IdentityBL
    {
        private readonly UserDAL _userDAL;

        private readonly string TokenKey;

        public IdentityBL(UserDAL userDAL, IConfiguration configuration)
        {
            _userDAL = userDAL;
            TokenKey = configuration["JwtSettings:Key"]!;
        }

        public LoginResponseDTO? Login(LoginParamsDTO loginParams)
        {
            User? user = _userDAL.GetUserByName(loginParams.Username);

            if (user == null)
            {
                return null;
            }

            return new LoginResponseDTO(GenerateToken(user), new UserDTO(user));
        }

        public string Register(NewUserDTO newUser)
        {
            User user = new User(Guid.NewGuid(), newUser.Username);
            _userDAL.AddUser(user);

            return GenerateToken(user);
        }

        public User? GetUserFromIdentity(ClaimsPrincipal claimsUser)
        {
            string id = GetIdFromToken(claimsUser);

            return _userDAL.GetUserById(Guid.Parse(id));
        }

        public string GenerateToken(User user)
        {
            JwtSecurityTokenHandler tokenHandler = new JwtSecurityTokenHandler();
            byte[] key = Encoding.UTF8.GetBytes(TokenKey);
            List<Claim> claims =
            [
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(JwtRegisteredClaimNames.Sub, user.Id.ToString()),
                // TODO: Add time limit
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

        public static string GetIdFromToken(ClaimsPrincipal user)
        {
            return user.FindFirst(ClaimTypes.NameIdentifier)?.Value!;
        }
    }
}
