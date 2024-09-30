using FDIBAAlumniNetworkAPI.Models;
using FDIBAAlumniNetworkAPI.Repositories;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FDIBAAlumniNetworkAPI.Services
{
    public class AlumniConnectionService : IAlumniConnectionService
    {
        private readonly IAlumniConnectionRepository _connectionRepository;

        public AlumniConnectionService(IAlumniConnectionRepository connectionRepository)
        {
            _connectionRepository = connectionRepository;
        }

        public async Task<IEnumerable<AlumniConnection>> GetConnectionsByUserIdAsync(int userId)
        {
            var connections = await _connectionRepository.GetAllAsync();
            return connections.Where(c => c.UserId == userId || c.ConnectedUserId == userId);
        }

        public async Task AddConnectionAsync(AlumniConnection connection)
        {
            await _connectionRepository.AddAsync(connection);
        }
    }
}