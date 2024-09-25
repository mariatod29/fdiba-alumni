using FDIBAAlumniNetworkAPI.Data;
using FDIBAAlumniNetworkAPI.Models;
using FDIBAAlumniNetworkAPI.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FDIBAAlumniNetworkAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobsController : ControllerBase
    {
        private readonly IJobService _jobService;
        private readonly ApplicationDbContext _dbContext;


        public JobsController(IJobService jobService, ApplicationDbContext dbContext)
        {
            _jobService = jobService;
            _dbContext = dbContext;

        }

        // GET: api/jobs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Job>>> GetJobs()
        {
            var jobs = await _jobService.GetAllJobsAsync();
            if (jobs == null || !jobs.Any())
            {
                return NotFound("No jobs found.");
            }
            return Ok(jobs);
        }

        // GET: api/jobs/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Job>> GetJobById(int id)
        {
            var jobToGet = await _jobService.GetJobByIdAsync(id);
            if (jobToGet == null)
            {
                return NotFound($"Job with ID {id} not found.");
            }
            return Ok(jobToGet);
        }

        // POST: api/jobs
        [HttpPost]
        public async Task<IActionResult> CreateJob([FromBody] Job job)
        {
            if (job == null)
            {
                return BadRequest("Job data is required.");
            }

            if (string.IsNullOrWhiteSpace(job.Title))
            {
                return BadRequest("Title is a required field.");
            }

            await _jobService.PostJobAsync(job);
            return CreatedAtAction(nameof(GetJobById), new { id = job.JobId }, job);
        }
    }
}
