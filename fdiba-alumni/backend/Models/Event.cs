using System;

namespace FDIBAAlumniNetworkAPI.Models
{
    public class Event
    {
        public int EventId { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string Date { get; set; } = string.Empty;
        public string Location { get; set; } = string.Empty;
    }

}