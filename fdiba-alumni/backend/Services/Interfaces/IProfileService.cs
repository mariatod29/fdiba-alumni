using FDIBAAlumniNetworkAPI.Models;
using System.Threading.Tasks;

namespace FDIBAAlumniNetworkAPI.Services
{
    public interface IProfileService
    {
        Task<Profile> GetProfileByIdAsync(int id);
        Task UpdateProfileAsync(Profile profile);
    }
}