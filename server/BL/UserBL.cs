using tech_reviews.DAL;
using tech_reviews.DTO;
using tech_reviews.Models;

namespace tech_reviews.BL
{
    public class UserBL
    {
        private readonly UserDAL _userDAL;

        public UserBL(UserDAL userDAL)
        {
            _userDAL = userDAL;
        }

        public User? GetUserById(Guid id)
        {
            return _userDAL.GetUserById(id);
        }

        public User AddUser(NewUserDTO newUser)
        {
            User user = new User(Guid.NewGuid(), newUser.Username);
            _userDAL.AddUser(user);

            return user;
        }
    }
}
