using ADM.Users.API.Models;

namespace ADM.Users.API.Application.Services
{
    public interface IUserAppService
    {
        Task<UserViewModel> GetById(int id);
        Task<IList<UserViewModel>> GetAll();
        Task Create(UserCreateViewModel user);
        Task Update(UserViewModel user);
        Task Delete(int id);
    }
}
