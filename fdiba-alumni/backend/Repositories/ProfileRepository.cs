using FDIBAAlumniNetworkAPI.Data;
using FDIBAAlumniNetworkAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace FDIBAAlumniNetworkAPI.Repositories
{
    public class ProfileRepository : GenericRepository<Profile>, IProfileRepository
    {
        public ProfileRepository(ApplicationDbContext context) : base(context) { }
        public async Task<Profile?> GetProfileByEmailAsync(string email)
        {
            return await _context.Profiles.FirstOrDefaultAsync(p => p.Email == email);
        }
    }
}
