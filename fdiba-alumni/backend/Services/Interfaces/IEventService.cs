using FDIBAAlumniNetworkAPI.Models;

namespace FDIBAAlumniNetworkAPI.Services
{
    public interface IEventService
    {
        Task<IEnumerable<Event>> GetAllEventsAsync();
        Task<Event> GetEventByIdAsync(int id);
        Task CreateEventAsync(Event fdibaEvent);
    }
};