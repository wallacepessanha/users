using ADM.Users.Domain.Users;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ADM.Users.Domain.Validations
{
    public class UserValidation : AbstractValidator<User>
    {
        public UserValidation()
        {
            RuleFor(u => u.Nome)
                .NotEmpty()
                .WithMessage("O campo {PropertyName} deve ser fornecido")
                .Length(2, 100)
                .WithMessage("O campo {PropertyName} precisa ter entre {MinLength} e {MaxLength} caracteres");

            RuleFor(u => u.Escolaridade)
                .IsInEnum()
                .WithMessage("Valor inválido para o campo {PropertyName}.");

            RuleFor(u => u.Email)
                .NotEmpty()
                .WithMessage("O campo {PropertyName} deve ser fornecido")
                .EmailAddress()
                .WithMessage("O campo {PropertyName} precisa ter um valor válido");

            RuleFor(u => u.SobreNome)
                .NotEmpty()
                .WithMessage("O campo {PropertyName} deve ser fornecido")
                .Length(2, 100)
                .WithMessage("O campo {PropertyName} precisa ter entre {MinLength} e {MaxLength} caracteres");

            RuleFor(u => u.DataNascimento.Date)
                .NotEmpty()
                .WithMessage("O campo Data Nascimento deve ser fornecido")
                .LessThan(DateTime.Now.Date)
                .WithMessage("O campo Data Nascimento deve ter um valor menor que a data atual");
        }
    }
}
