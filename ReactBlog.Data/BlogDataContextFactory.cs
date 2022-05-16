using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactBlog.Data
{
    class BlogDataContextFactory : IDesignTimeDbContextFactory<BlogDataContext>
    {

        BlogDataContext IDesignTimeDbContextFactory<BlogDataContext>.CreateDbContext(string[] args)
        {
            var config = new ConfigurationBuilder()
                .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), $"..{Path.DirectorySeparatorChar}ReactBlog.Web"))
                .AddJsonFile("appsettings.json")
                .AddJsonFile("appsettings.local.json", optional: true, reloadOnChange: true).Build();

            return new BlogDataContext(config.GetConnectionString("ConStr"));
        }
    }
}

