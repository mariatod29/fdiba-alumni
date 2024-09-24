using FDIBAAlumniNetworkAPI.Models;
using System.Threading.Tasks;

namespace FDIBAAlumniNetworkAPI.Services
{
    public interface IProfileService
    {
        Task<Profile> GetProfileByEmailAsync(string email);
        Task UpdateProfileAsync(Profile profile);
    }
}