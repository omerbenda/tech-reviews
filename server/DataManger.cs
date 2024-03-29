using tech_reviews.Models;

namespace tech_reviews
{
    public class DataManger
    {
        public static List<User> Users =
            [
                new User(Guid.NewGuid(), "tester"),
                new User(Guid.NewGuid(), "dev"),
            ];

        public static List<Post> Posts =
            [
                new Post(Guid.NewGuid(), Users[1], new PostContent("device 1", "This is a new device, I use it everyday", 4)),
                new Post(Guid.NewGuid(), Users[0], new PostContent("device 1", "This new technology should not be used by anybody", 2)),
            ];
    }
}
