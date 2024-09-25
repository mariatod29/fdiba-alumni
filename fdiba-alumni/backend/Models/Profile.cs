using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;

namespace FDIBAAlumniNetworkAPI.Models
{
    public class Profile
    {
        [Key]
        public int ProfileId { get; set; }

        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Email { get; set; }

        [MaxLength(15)]
        public string? PhoneNumber { get; set; }

        [MaxLength(100)]
        public string? LinkedIn { get; set; }

        public string? DegreeProgramme { get; set; }
        public string? UniversityDegree { get; set; }
        public string? YearOfGraduation { get; set; }
        public string? Organization { get; set; }
        public string? Position { get; set; }
        public string? RoleInFdibaAlumniSerialized { get; set; }
        public int UserId { get; set; }

        [NotMapped]
        public List<string> RolesInFdibaAlumni
        {
            get => string.IsNullOrEmpty(RoleInFdibaAlumniSerialized) ? new List<string>() : RoleInFdibaAlumniSerialized.Split(',').ToList();
            set => RoleInFdibaAlumniSerialized = string.Join(",", value);
        }
    }
}
