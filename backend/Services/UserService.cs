using FDIBAAlumniNetworkAPI.Data;
using FDIBAAlumniNetworkAPI.Models;
using FDIBAAlumniNetworkAPI.Repositories;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using Microsoft.EntityFrameworkCore;
using System;
using System.Security.Cryptography;
using System.Threading.Tasks;

namespace FDIBAAlumniNetworkAPI.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;
        private readonly ApplicationDbContext _dbContext;


        public UserService(IUserRepository userRepository, ApplicationDbContext dbContext)
        {
            _userRepository = userRepository;
            _dbContext = dbContext ?? throw new ArgumentNullException(nameof(dbContext));

        }

        private string HashPassword(string password, out string salt)
        {
            byte[] saltBytes = new byte[16];
            using (var rng = RandomNumberGenerator.Create())
            {
                rng.GetBytes(saltBytes);
            }

            salt = Convert.ToBase64String(saltBytes);
            string hashedPassword = Convert.ToBase64String(KeyDerivation.Pbkdf2(
                password: password,
                salt: saltBytes,
                prf: KeyDerivationPrf.HMACSHA256,
                iterationCount: 10000,
                numBytesRequested: 256 / 8
            ));

            return hashedPassword;
        }

        public async Task RegisterUserAsync(User user)
        {
            user.Username = user.Email;
            user.PasswordHash = HashPassword(user.PasswordHash, out string salt);
            user.Salt = salt;
            await _userRepository.AddAsync(user);
        }


        public async Task UpdateUserAsync(User user)
        {
            await _userRepository.UpdateAsync(user);
        }

        public async Task DeleteUserAsync(int id)
        {
            await _userRepository.DeleteAsync(id);
        }

        public async Task<User?> GetUserByIdAsync(int id)
        {
            return await _dbContext.Users.FindAsync(id);
        }

        public async Task<User?> GetUserByEmailAsync(string email)
        {
            return await _dbContext.Users.FirstOrDefaultAsync(u => u.Email == email);
        }

        public Task RegisterUserAsync(User newUser, string password)
        {
            throw new NotImplementedException();
        }
    }
}
