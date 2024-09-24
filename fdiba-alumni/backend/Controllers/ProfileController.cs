using FDIBAAlumniNetworkAPI.Models;
using FDIBAAlumniNetworkAPI.Services;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace FDIBAAlumniNetworkAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProfileController : ControllerBase
    {
        private readonly IProfileService _profileService;

        public ProfileController(IProfileService profileService)
        {
            _profileService = profileService;
        }

        [HttpGet("{email}")]
        public async Task<IActionResult> GetProfileByEmail(string email)
        {
            var profile = await _profileService.GetProfileByEmailAsync(email);
            if (profile == null)
                return NotFound();

            return Ok(profile);
        }

        [HttpPut("{email}")]
        public async Task<IActionResult> UpdateProfile(string email, [FromBody] Profile profile)
        {
            if (profile == null)
                return BadRequest("Profile data is null.");

            var existingProfile = await _profileService.GetProfileByEmailAsync(email);
            if (existingProfile == null)
                return NotFound("Profile not found.");

            existingProfile.FirstName = profile.FirstName;
            existingProfile.LastName = profile.LastName;
            existingProfile.PhoneNumber = profile.PhoneNumber;
            existingProfile.LinkedIn = profile.LinkedIn;
            existingProfile.DegreeProgramme = profile.DegreeProgramme;
            existingProfile.UniversityDegree = profile.UniversityDegree;
            existingProfile.YearOfGraduation = profile.YearOfGraduation;
            existingProfile.Organization = profile.Organization;
            existingProfile.Position = profile.Position;
            existingProfile.RolesInFdibaAlumni = profile.RolesInFdibaAlumni;

            await _profileService.UpdateProfileAsync(existingProfile);
            return NoContent();
        }
    }
}
