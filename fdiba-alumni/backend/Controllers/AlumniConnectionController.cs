using FDIBAAlumniNetworkAPI.Models;
using FDIBAAlumniNetworkAPI.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FDIBAAlumniNetworkAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AlumniConnectionController : ControllerBase
    {
        private readonly IAlumniConnectionService _connectionService;

        public AlumniConnectionController(IAlumniConnectionService connectionService)
        {
            _connectionService = connectionService;
        }

        [HttpGet("{userId}")]
        public async Task<IActionResult> GetConnectionsByUserId(int userId)
        {
            var connections = await _connectionService.GetConnectionsByUserIdAsync(userId);
            return Ok(connections);
        }

        [HttpPost]
        public async Task<IActionResult> AddConnection([FromBody] AlumniConnection connection)
        {
            await _connectionService.AddConnectionAsync(connection);
            return CreatedAtAction(nameof(GetConnectionsByUserId), new { userId = connection.UserId }, connection);
        }
    }
}
