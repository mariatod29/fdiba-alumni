using fdiba_alumni.Models;
using System.Threading.Tasks;

namespace FDIBAAlumniNetworkAPI.Repositories
{
    public interface IUserRepository : IGenericRepository<User>
    {
        Task<User> GetByUsernameAsync(string username);
    }
}