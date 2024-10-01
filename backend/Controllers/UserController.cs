using FDIBAAlumniNetworkAPI.Models;
using FDIBAAlumniNetworkAPI.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using System.Security.Cryptography;
using FDIBAAlumniNetworkAPI.Data;

namespace FDIBAAlumniNetworkAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly ApplicationDbContext _dbContext;

        public UserController(IUserService userService, ApplicationDbContext dbContext)
        {
            _userService = userService;
            _dbContext = dbContext;
        }

        // GET: api/user/{id}
        [HttpGet("{id}")]
        public async Task<IActionResult> GetUserById(int id)
        {
            var user = await _userService.GetUserByIdAsync(id); // Assume this service method exists
            if (user == null)
            {
                return NotFound();
            }

            return Ok(user);
        }

        // POST: api/user/register
        [HttpPost("register")]
        public async Task<IActionResult> RegisterUser([FromBody] RegisterUserRequest request)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var newUser = new User
            {
                Username = request.Email,
                Email = request.Email,
                PasswordHash = HashPassword(request.Password)
            };

            var profile = new Profile
            {
                FirstName = request.Profile?.FirstName,
                LastName = request.Profile?.LastName,
                Email = request.Email,
                PhoneNumber = request.Profile?.PhoneNumber,
                DegreeProgramme = request.Profile?.DegreeProgramme,
                UniversityDegree = request.Profile?.UniversityDegree,
                YearOfGraduation = request.Profile?.YearOfGraduation,
                Organization = request.Profile?.Organization,
                Position = request.Profile?.Position,
                LinkedIn = request.Profile?.LinkedIn,
                RoleInFdibaAlumniSerialized = string.Join(",", request.Profile?.RolesInFdibaAlumni ?? new List<string>())
            };

            newUser.Profile = profile;

            await _userService.RegisterUserAsync(newUser);

            newUser.Profile.UserId = newUser.UserId;

            return CreatedAtAction(nameof(GetUserById), new { id = newUser.UserId }, newUser);
        }

        // POST: api/user/login
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            if (request == null || string.IsNullOrEmpty(request.Email) || string.IsNullOrEmpty(request.Password))
            {
                return BadRequest("Invalid login request.");
            }

            var user = await _userService.GetUserByEmailAsync(request.Email);
            if (user == null || !VerifyPassword(request.Password, user.PasswordHash))
            {
                return Unauthorized("Invalid credentials.");
            }

            return Ok("Login successful");
        }

        private string HashPassword(string password)
        {
            byte[] salt = new byte[16];
            using (var rng = RandomNumberGenerator.Create())
            {
                rng.GetBytes(salt);
            }

            string hashed = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                password: password,
                salt: salt,
                prf: KeyDerivationPrf.HMACSHA256,
                iterationCount: 10000,
                numBytesRequested: 32));

            return $"{Convert.ToBase64String(salt)}:{hashed}";
        }

        public bool VerifyPassword(string password, string storedHash)
        {
            return storedHash == HashPassword(password);
        }
    }

    public class RegisterUserRequest
    {
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public Profile Profile { get; set; }
    }

    public class LoginRequest
    {
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
    }
}
