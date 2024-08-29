using FDIBAAlumniNetworkAPI.Models;
using FDIBAAlumniNetworkAPI.Repositories;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FDIBAAlumniNetworkAPI.Services
{
    public class MessageService : IMessageService
    {
        private readonly IMessageRepository _messageRepository;

        public MessageService(IMessageRepository messageRepository)
        {
            _messageRepository = messageRepository;
        }

        public async Task<IEnumerable<Message>> GetMessagesByUserIdAsync(int userId)
        {
            var messages = await _messageRepository.GetAllAsync();
            return messages.Where(m => m.SenderId == userId || m.ReceiverId == userId);
        }

        public async Task SendMessageAsync(Message message)
        {
            await _messageRepository.AddAsync(message);
        }
    }
}