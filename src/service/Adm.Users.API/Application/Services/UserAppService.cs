using ADM.Users.API.Models;
using ADM.Users.Domain.Contracts;
using ADM.Users.Domain.Users;
using AutoMapper;

namespace ADM.Users.API.Application.Services
{
    public class UserAppService : IUserAppService
    {
        public readonly IUserService _userService;
        private readonly IMapper _mapper;

        public UserAppService(IUserService userService, IMapper mapper)
        {
            _userService = userService;
            _mapper = mapper;
        }

        public async Task<UserViewModel> GetById(int id)
        {
            return _mapper.Map<UserViewModel>(await _userService.GetById(id));
        }

        public async Task<IList<UserViewModel>> GetAll()
        {
            return _mapper.Map<IList<UserViewModel>>(await _userService.GetAll());
        }

        public async Task Create(UserCreateViewModel user)
        {
            await _userService.Create(_mapper.Map<User>(user));
        }

        public async Task Update(UserViewModel user)
        {
            await _userService.Update(_mapper.Map<User>(user));
        }

        public async Task Delete(int id)
        {
            await _userService.Delete(id);
        }
    }
}
