using FDIBAAlumniNetworkAPI.Models;
using FDIBAAlumniNetworkAPI.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FDIBAAlumniNetworkAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventController : ControllerBase
    {
        private readonly IEventService _eventService;

        public EventController(IEventService eventService)
        {
            _eventService = eventService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllEvents()
        {
            var events = await _eventService.GetAllEventsAsync();
            return Ok(events);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetEventById(int id)
        {
            var event = await _eventService.GetEventByIdAsync(id);
            if (event == null)
                return NotFound();

            return Ok(event);
        }

        [HttpPost]
        public async Task<IActionResult> CreateEvent([FromBody] Event event)
        {
            await _eventService.CreateEventAsync(event);
            return CreatedAtAction(nameof(GetEventById), new { id = event.EventId }, event);
        }
    }
}