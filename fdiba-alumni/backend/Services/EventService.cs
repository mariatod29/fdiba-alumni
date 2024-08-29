using FDIBAAlumniNetworkAPI.Models;
using FDIBAAlumniNetworkAPI.Repositories;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FDIBAAlumniNetworkAPI.Services
{
    public class EventService : IEventService
    {
        private readonly IEventRepository _eventRepository;

        public EventService(IEventRepository eventRepository)
        {
            _eventRepository = eventRepository;
        }

        public async Task<IEnumerable<Event>> GetAllEventsAsync()
        {
            return await _eventRepository.GetAllAsync();
        }

        public async Task<Event> GetEventByIdAsync(int id)
        {
            return await _eventRepository.GetByIdAsync(id);
        }

        public async Task CreateEventAsync(Event event)
        {
            await _eventRepository.AddAsync(event);
        }
    }
}