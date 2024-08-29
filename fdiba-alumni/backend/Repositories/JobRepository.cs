using FDIBAAlumniNetworkAPI.Models;

namespace FDIBAAlumniNetworkAPI.Repositories
{
    public class JobRepository : GenericRepository<Job>, IJobRepository
    {
        public JobRepository(ApplicationDbContext context) : base(context) { }
    }
}