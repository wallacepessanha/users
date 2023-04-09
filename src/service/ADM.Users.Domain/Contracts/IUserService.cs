using ADM.Users.Domain.Users;

namespace ADM.Users.Domain.Contracts
{
    public interface IUserService
    {
        Task<User> GetById(int id);
        Task<IList<User>> GetAll();
        Task Create(User user);
        Task Update(User user);
        Task Delete(int id);
    }
}
