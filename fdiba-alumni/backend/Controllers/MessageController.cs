using FDIBAAlumniNetworkAPI.Models;
using FDIBAAlumniNetworkAPI.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FDIBAAlumniNetworkAPI.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class MessageController : ControllerBase
	{
		private readonly IMessageService _messageService;

		public MessageController(IMessageService messageService)
		{
			_messageService = messageService;
		}

		[HttpGet("{userId}")]
		public async Task<IActionResult> GetMessagesByUserId(int userId)
		{
			var messages = await _messageService.GetMessagesByUserIdAsync(userId);
			return Ok(messages);
		}

		[HttpPost]
		public async Task<IActionResult> SendMessage([FromBody] Message message)
		{
			await _messageService.SendMessageAsync(message);
			return CreatedAtAction(nameof(GetMessagesByUserId), new { userId = message.SenderId }, message);
		}
	}
}