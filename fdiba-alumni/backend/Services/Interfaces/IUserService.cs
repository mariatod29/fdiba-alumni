using FDIBAAlumniNetworkAPI.Models;
using System.Threading.Tasks;

namespace FDIBAAlumniNetworkAPI.Services
{
    public interface IUserService
    {
        Task<User> GetUserByIdAsync(int id);
        Task<User> GetUserByEmailAsync(string email);
        Task RegisterUserAsync(User user);
        Task UpdateUserAsync(User user);
        Task DeleteUserAsync(int id);
        Task RegisterUserAsync(User newUser, string password);
    }
}