using Microsoft.AspNetCore.Mvc;
using FDIBAAlumniNetworkAPI.Models;
using FDIBAAlumniNetworkAPI.Services;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using FDIBAAlumniNetworkAPI.Data;

namespace FDIBAAlumniNetworkAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventsController : ControllerBase
    {
        private readonly IEventService _eventService;
        private readonly ApplicationDbContext _dbContext;


        public EventsController(IEventService eventService, ApplicationDbContext dbContext)
        {
            _eventService = eventService;
            _dbContext = dbContext;
        }

        [HttpPost]
        public async Task<IActionResult> CreateEvent([FromBody] Event fdibaEvent)
        {
            if (fdibaEvent == null)
            {
                return BadRequest("Event data is required.");
            }

            if (string.IsNullOrWhiteSpace(fdibaEvent.Title))
            {
                return BadRequest("Title is a required field.");
            }

            await _eventService.CreateEventAsync(fdibaEvent);
            return CreatedAtAction(nameof(GetEventById), new { id = fdibaEvent.EventId }, fdibaEvent);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Event>> GetEventById(int id)
        {
            var eventToGet = await _eventService.GetEventByIdAsync(id);

            if (eventToGet == null)
            {
                return NotFound();
            }

            return eventToGet;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Event>>> GetEvents()
        {
            var events = await _dbContext.Events.ToListAsync();
            if (events == null || !events.Any())
            {
                return NotFound("No events found.");
            }
            return Ok(events);
        }


    }
}
