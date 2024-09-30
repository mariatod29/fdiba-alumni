using FDIBAAlumniNetworkAPI.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FDIBAAlumniNetworkAPI.Services
{
    public interface IAlumniConnectionService
    {
        Task<IEnumerable<AlumniConnection>> GetConnectionsByUserIdAsync(int userId);
        Task AddConnectionAsync(AlumniConnection connection);
    }
}
