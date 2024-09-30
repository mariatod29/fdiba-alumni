using FDIBAAlumniNetworkAPI.Models;
using System.Threading.Tasks;

namespace FDIBAAlumniNetworkAPI.Repositories
{
    public interface IUserRepository : IGenericRepository<User>
    {
        Task<User> GetByEmailAsync(string email);
    }
}