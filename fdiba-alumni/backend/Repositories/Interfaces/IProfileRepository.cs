using FDIBAAlumniNetworkAPI.Models;

namespace FDIBAAlumniNetworkAPI.Repositories
{
    public interface IProfileRepository : IGenericRepository<Profile>
    {
        Task<Profile> GetProfileByEmailAsync(string email);
    }
}
