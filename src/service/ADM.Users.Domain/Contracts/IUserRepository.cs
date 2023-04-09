using ADM.Users.Domain.Users;

namespace ADM.Users.Domain.Contracts
{
    public interface IUserRepository
    {
        Task<IList<User>> GetAll();
        Task<User?> GetById(int id);
        Task<User?> GetByEmail(string email);
        Task Create(User user);
        Task Update(User user);
        Task Delete(User user);
    }
}
