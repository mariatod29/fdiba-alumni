using FDIBAAlumniNetworkAPI.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FDIBAAlumniNetworkAPI.Services
{
    public interface IMessageService
    {
        Task<IEnumerable<Message>> GetMessagesByUserIdAsync(int userId);
        Task SendMessageAsync(Message message);
    }
}