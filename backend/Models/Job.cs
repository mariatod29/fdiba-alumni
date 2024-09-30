namespace FDIBAAlumniNetworkAPI.Models
{
    public class Job
    {
        public int JobId { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string Company { get; set; } = string.Empty;
        public string Type { get; set; } = string.Empty;
        public string ExperienceLevel { get; set; } = string.Empty;
    }
}