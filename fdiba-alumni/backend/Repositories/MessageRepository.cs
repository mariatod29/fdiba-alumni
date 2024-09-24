using FDIBAAlumniNetworkAPI.Data;
using FDIBAAlumniNetworkAPI.Models;

namespace FDIBAAlumniNetworkAPI.Repositories
{
    public class MessageRepository : GenericRepository<Message>, IMessageRepository
    {
        public MessageRepository(ApplicationDbContext context) : base(context) { }
    }
}
