using System;
using System.Collections.Generic;
using System.Linq;

namespace ReactBlog.Data
{
    public class BlogRepository
    {
        private readonly string _connectionString;
        public BlogRepository(string connectionString)
        {
            _connectionString = connectionString;
        }
        public void AddPost(Post post)
        {
            using var context = new BlogDataContext(_connectionString);
            context.Posts.Add(post);
            context.SaveChanges();
        }
        public List<Post> GetPosts(int skip, int onPage)
        {
            using var context = new BlogDataContext(_connectionString);
            return context.Posts.OrderByDescending(p => p.DateCreated).Skip(skip).Take(onPage).ToList();
        }
        public void AddComment(Comment comment)
        {
            using var context = new BlogDataContext(_connectionString);
            context.Comments.Add(comment);
            context.SaveChanges();
        }
        public List<Comment> GetCommentsForPost(int id)
        {
            using var context = new BlogDataContext(_connectionString);
            return context.Comments.Where(c => c.PostId == id).OrderByDescending(c => c.DateCreated).ToList();
        }
        public Post GetPostById(int id)
        {
            using var context = new BlogDataContext(_connectionString);
            return context.Posts.FirstOrDefault(p => p.Id == id);
        }
        public int GetTotalBlogPostCount()
        {
            using var context = new BlogDataContext(_connectionString);
            return context.Posts.Count();
        }
    }
}
