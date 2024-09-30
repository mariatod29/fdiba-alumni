using FDIBAAlumniNetworkAPI.Models;
using FDIBAAlumniNetworkAPI.Repositories;
using System.Threading.Tasks;

namespace FDIBAAlumniNetworkAPI.Services
{
    public class ProfileService : IProfileService
    {
        private readonly IProfileRepository _profileRepository;

        public ProfileService(IProfileRepository profileRepository)
        {
            _profileRepository = profileRepository;
        }

        public async Task<Profile> GetProfileByEmailAsync(string email)
        {
            return await _profileRepository.GetProfileByEmailAsync(email);
        }

        public async Task UpdateProfileAsync(Profile profile)
        {
            await _profileRepository.UpdateAsync(profile);
        }
    }
}
