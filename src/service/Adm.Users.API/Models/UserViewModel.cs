using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace ADM.Users.API.Models
{
    public class UserViewModel
    {
        [Required(ErrorMessage = "O campo {0} é obrigatório")]
        public int Id { get; set; }
        [Required(ErrorMessage = "O campo {0} é obrigatório")]
        [StringLength(100, ErrorMessage = "O campo {0} precisa ter entre {2} e {1} caracteres", MinimumLength = 2)]
        public string Nome { get; set; }
        [Required(ErrorMessage = "O campo {0} é obrigatório")]
        [StringLength(100, ErrorMessage = "O campo {0} precisa ter entre {2} e {1} caracteres", MinimumLength = 2)]
        public string SobreNome { get; set; }
        [Required(ErrorMessage = "O campo {0} é obrigatório")]
        [StringLength(100, ErrorMessage = "O campo {0} precisa ter entre {2} e {1} caracteres", MinimumLength = 2)]
        public string Email { get; set; }
        [Required(ErrorMessage = "O campo {0} é obrigatório")]        
        public DateTime DataNascimento { get; set; }
        [Required(ErrorMessage = "O campo {0} é obrigatório")]        
        public int Escolaridade { get; set; }
    }
}
