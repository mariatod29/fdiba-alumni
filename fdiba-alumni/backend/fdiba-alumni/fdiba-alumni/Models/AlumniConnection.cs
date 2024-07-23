namespace fdiba_alumni.Models
{
    public class AlumniConnection
    {
        public int AlumniConnectionId { get; set; }
        public int UserId { get; set; }
        public int ConnectedUserId { get; set; }

        public User User { get; set; }
        public User ConnectedUser { get; set; }
    }

}
