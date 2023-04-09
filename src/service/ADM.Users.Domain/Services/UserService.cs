using ADM.Users.Domain.Contracts;
using ADM.Users.Domain.Nofications;
using ADM.Users.Domain.Users;
using ADM.Users.Domain.Validations;

namespace ADM.Users.Domain.Services
{
    public class UserService :  BaseService, IUserService
    {
        public readonly IUserRepository _userRepository;

        public UserService(IUserRepository userRepository, INotificator notificator)
            : base(notificator)
        {
            _userRepository = userRepository;
        }

        public async Task<User> GetById(int id)
        {
            return await _userRepository.GetById(id);
        }

        public async Task<IList<User>> GetAll()
        {
            return await _userRepository.GetAll();
        }

        public async Task Create(User user)
        {
            if (!ExecuteValidation(new UserValidation(), user)) return;

            if (await _userRepository.GetByEmail(user.Email) is not null)
            {
                Notificate("Já existe um usuário com este e-mail infomado.");
                return;
            }

            await _userRepository.Create(user);
        }

        public async Task Update(User user)
        {
            if (!ExecuteValidation(new UserValidation(), user)) return;

            var userUpdate = await _userRepository.GetById(user.Id);

            if (userUpdate is null)
            {
                Notificate("Usuário informado não existe.");
                return;
            }            

            await _userRepository.Update(user);
        }

        public async Task Delete(int id)
        {
            var user = await _userRepository.GetById(id);

            if (user is null)
            {
                Notificate("O Usuário informado não existe!");
                return;
            }

            await _userRepository.Delete(user);            
        }
    }
}
