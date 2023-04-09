namespace ADM.Users.Domain.Users
{
    public class User : Entity
    {       
        public string Nome { get; private set; }
        public string SobreNome { get; private set; }
        public string Email { get; private set; }
        public DateTime DataNascimento { get; private set; }
        public Scholarity Escolaridade { get; private set; }

        public User(string nome, string sobreNome, string email, DateTime dataNascimento, Scholarity escolaridade)
        {
            Nome = nome;
            SobreNome = sobreNome;
            Email = email;
            DataNascimento = dataNascimento;
            Escolaridade = escolaridade;
        }

        public User() { }
    }
}
