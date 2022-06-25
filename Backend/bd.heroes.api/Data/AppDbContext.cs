using bd.heroes.api.Models;
using Microsoft.EntityFrameworkCore;

namespace bd.heroes.api.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }
        public DbSet<Heroe> Heroes { get; set; }
    }
}
