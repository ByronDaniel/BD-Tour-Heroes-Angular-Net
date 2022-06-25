using System.ComponentModel.DataAnnotations;

namespace bd.heroes.api.Models
{
    public class Heroe
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Nombre { get; set; }
        [Required]
        public string Imagen { get; set; }
        [Required]
        public string Descripcion { get; set; }
    }
}
