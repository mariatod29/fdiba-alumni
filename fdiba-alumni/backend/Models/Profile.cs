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

        [Required]
        [MaxLength(100)]
        public string FirstName { get; set; }

        [Required]
        [MaxLength(100)]
        public string LastName { get; set; }

        [Required]
        [EmailAddress]
        [MaxLength(100)]
        public string Email { get; set; }

        [Phone]
        [MaxLength(15)]
        public string Phone { get; set; }

        [MaxLength(100)]
        public string LinkedIn { get; set; }

        [Required]
        [MaxLength(100)]
        public string DegreeProgramme { get; set; }

        [Required]
        [MaxLength(50)]
        public string UniversityDegree { get; set; }

        [Required]
        [MaxLength(4)]
        public string YearOfGraduation { get; set; }

        [MaxLength(100)]
        public string Organization { get; set; }

        [MaxLength(100)]
        public string Position { get; set; }
        public string RoleInFdibaAlumniSerialized { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }

        [NotMapped]
        public List<string> RoleInFdibaAlumni
        {
            get => string.IsNullOrEmpty(RoleInFdibaAlumniSerialized) ? new List<string>() : RoleInFdibaAlumniSerialized.Split(',').ToList();
            set => RoleInFdibaAlumniSerialized = string.Join(",", value);
        }
    }
}