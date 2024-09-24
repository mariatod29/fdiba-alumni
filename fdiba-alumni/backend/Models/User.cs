using System.ComponentModel.DataAnnotations;
using FDIBAAlumniNetworkAPI.Models;

public class User
{
    public int UserId { get; set; }
    public string Username { get; set; } = string.Empty;

    [Required]
    public string PasswordHash { get; set; } = string.Empty;

    [Required]
    public string Email { get; set; } = string.Empty;
    public string Salt { get; set; } = string.Empty;
    public Profile Profile { get; set; } = new Profile();
}

