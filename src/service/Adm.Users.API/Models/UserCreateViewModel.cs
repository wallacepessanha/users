using ADM.Users.Domain.Users;
using System.ComponentModel.DataAnnotations;

namespace ADM.Users.API.Models
{
    public class UserCreateViewModel
    {        
        [Required(ErrorMessage = "O campo {0} é obrigatório")]
        [StringLength(100, ErrorMessage = "O campo {0} precisa ter entre {2} e {1} caracteres", MinimumLength = 2)]
        public string Nome { get; set; }
        [Required(ErrorMessage = "O campo {0} é obrigatório")]
        [StringLength(100, ErrorMessage = "O campo {0} precisa ter entre {2} e {1} caracteres", MinimumLength = 2)]
        public string SobreNome { get; set; }
        [Required(ErrorMessage = "O campo {0} é obrigatório")]
        [EmailAddress(ErrorMessage = "O campo {0} precisa ter um valor válido")]
        public string Email { get; set; }
        [Required(ErrorMessage = "O campo {0} é obrigatório")]        
        public DateTime DataNascimento { get; set; }
        [Required(ErrorMessage = "O campo {0} é obrigatório")]
        
        public int Escolaridade { get; set; }
    }

    public enum ScholarityViewModel
    {
        Infantil = 1,
        Fundamental = 2,
        Medio = 3,
        Superior = 4
    }
}
