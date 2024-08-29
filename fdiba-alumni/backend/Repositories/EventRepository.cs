using FDIBAAlumniNetworkAPI.Models;

namespace FDIBAAlumniNetworkAPI.Repositories
{
    public class EventRepository : GenericRepository<Event>, IEventRepository
    {
        public EventRepository(ApplicationDbContext context) : base(context) { }
    }
}