﻿using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactBlog.Data
{
    class BlogDataContext : DbContext
    {
     
            private readonly string _connectionString;
            public BlogDataContext(string connectionString)
            {
                _connectionString = connectionString;
            }
            protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
            {
                optionsBuilder.UseSqlServer(_connectionString);
            }
            public DbSet<Post> Posts { get; set; }
            public DbSet<Comment> Comments { get; set; }
        }

    }

