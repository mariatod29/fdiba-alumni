using FDIBAAlumniNetworkAPI.Data;
using FDIBAAlumniNetworkAPI.Models;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace FDIBAAlumniNetworkAPI.Repositories
{
    public class UserRepository : GenericRepository<User>, IUserRepository
    {
        public UserRepository(ApplicationDbContext context) : base(context) { }

        public async Task<User?> GetByEmailAsync(string email)
        {
            return await _context.Users.SingleOrDefaultAsync(u => u.Email == email);
        }

    }
}
