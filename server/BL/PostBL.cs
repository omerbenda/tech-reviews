using System.Reflection.Metadata.Ecma335;
using System.Security.Claims;
using tech_reviews.DAL;
using tech_reviews.DTO;
using tech_reviews.Models;

namespace tech_reviews.BL
{
    public class PostBL
    {
        private readonly PostDAL _postDAL;
        private readonly UserDAL _userDAL;

        public PostBL(PostDAL postDAL, UserDAL userDAL)
        {
            _postDAL = postDAL;
            _userDAL = userDAL;
        }

        public List<Post> GetPosts()
        {
            return _postDAL.GetPosts();
        }

        public Post AddPostByUser(NewPostDTO newPost, ClaimsPrincipal claimsUser)
        {
            string idClaim = IdentityBL.GetIdFromToken(claimsUser);

            return AddPost(newPost, Guid.Parse(idClaim));
        }

        public Post AddPost(NewPostDTO newPost, Guid userId)
        {
            User author = _userDAL.GetUserById(userId)
                            ?? throw new ArgumentException("Non-existent user id");
            Post post = new Post(Guid.NewGuid(), author, newPost.Content);
            _postDAL.AddPost(post);

            return post;
        }

        public Post? AddCommentToPost(NewCommentDTO newComment, ClaimsPrincipal claimsUser)
        {
            string idClaim = IdentityBL.GetIdFromToken(claimsUser);
            User author = _userDAL.GetUserById(Guid.Parse(idClaim))
                            ?? throw new ArgumentException("Non-existent user id");

            return _postDAL.AddCommentToPost(newComment.PostId, new PostComment(Guid.NewGuid(), author, newComment.Body));
        }
    }
}
