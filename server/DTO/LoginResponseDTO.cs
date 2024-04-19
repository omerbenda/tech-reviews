namespace tech_reviews.DTO
{
    public class LoginResponseDTO
    {
        public string Token { get; set; }
        public UserDTO User { get; set; }

        public LoginResponseDTO(string token, UserDTO user)
        {
            Token = token;
            User = user;
        }
    }
}
