using FDIBAAlumniNetworkAPI.Data;
using FDIBAAlumniNetworkAPI.Models;

namespace FDIBAAlumniNetworkAPI.Repositories
{
	public class AlumniConnectionRepository : GenericRepository<AlumniConnection>, IAlumniConnectionRepository
	{
		public AlumniConnectionRepository(ApplicationDbContext context) : base(context) { }
	}
}