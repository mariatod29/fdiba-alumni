using FDIBAAlumniNetworkAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace FDIBAAlumniNetworkAPI.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Profile> Profiles { get; set; }
        public DbSet<Event> Events { get; set; }
        public DbSet<Job> Jobs { get; set; }
        public DbSet<AlumniConnection> AlumniConnections { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
                .HasOne(u => u.Profile)
                .WithOne()
                .HasForeignKey<Profile>(p => p.UserId);

            modelBuilder.Entity<AlumniConnection>()
                .HasOne(ac => ac.User)
                .WithMany()
                .HasForeignKey(ac => ac.UserId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<AlumniConnection>()
                .HasOne(ac => ac.ConnectedUser)
                .WithMany()
                .HasForeignKey(ac => ac.ConnectedUserId)
                .OnDelete(DeleteBehavior.Restrict);

            base.OnModelCreating(modelBuilder);
        }
    }
}
