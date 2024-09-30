using FDIBAAlumniNetworkAPI.Models;
using FDIBAAlumniNetworkAPI.Repositories;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FDIBAAlumniNetworkAPI.Services
{
    public class JobService : IJobService
    {
        private readonly IJobRepository _jobRepository;

        public JobService(IJobRepository jobRepository)
        {
            _jobRepository = jobRepository;
        }

        public async Task<IEnumerable<Job>> GetAllJobsAsync()
        {
            return await _jobRepository.GetAllAsync();
        }

        public async Task<Job> GetJobByIdAsync(int id)
        {
            return await _jobRepository.GetByIdAsync(id);
        }

        public async Task PostJobAsync(Job job)
        {
            await _jobRepository.AddAsync(job);
        }
    }
}
