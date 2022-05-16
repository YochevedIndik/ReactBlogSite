using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using ReactBlog.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactBlog.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private string _connectionString;
        public HomeController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }
        [Route("addpost")]
        [HttpPost]
        public void AddPost(Post post)
        {
            var repo = new BlogRepository(_connectionString);
            post.DateCreated = DateTime.Now;
            repo.AddPost(post);
        }
        [Route("getposts")]
        [HttpGet]
        public List<Post> GetPosts(int pageNumber)
        {
            int amountOnPage = 3;
            int skip = (pageNumber - 1) * amountOnPage;
            var repo = new BlogRepository(_connectionString);
            return repo.GetPosts(skip, amountOnPage);
        }
        [Route("addcomment")]
        [HttpPost]
        public void AddComment(Comment comment)
        {
            var repo = new BlogRepository(_connectionString);
            comment.DateCreated = DateTime.Now;
            repo.AddComment(comment);
        }
        [Route("getcomments")]
        [HttpGet]
        public List<Comment> GetCommentsForPost(int id)
        {
            var repo = new BlogRepository(_connectionString);
            return repo.GetCommentsForPost(id);
        }
        [Route("getpost")]
        [HttpGet]
        public Post GetPostById(int id)
        {
            var repo = new BlogRepository(_connectionString);
            return repo.GetPostById(id);
        }
        [Route("gettotalposts")]
        [HttpGet]
        public int GetTotalPosts()
        {
            var repo = new BlogRepository(_connectionString);
            return repo.GetTotalBlogPostCount();
        }
    }
}
