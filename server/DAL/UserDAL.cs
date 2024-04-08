using tech_reviews.Models;

namespace tech_reviews.DAL
{
    public class UserDAL
    {
        public UserDAL() { }

        public User? GetUserById(Guid id)
        {
            return DataManager.Users.Find(user => user.Id.Equals(id));
        }

        public User? GetUserByName(string username)
        {
            return DataManager.Users.Find(user => user.Username.Equals(username));
        }

        public void AddUser(User newUser)
        {
            DataManager.Users.Add(newUser);
        }
    }
}
