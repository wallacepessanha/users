using ADM.Users.API.Application.Services;
using ADM.Users.API.Models;
using ADM.Users.Domain.Contracts;
using Microsoft.AspNetCore.Mvc;

namespace ADM.Users.API.Controllers
{
    [Route("api/users")]    
    public class UserController : MainController
    {
        private readonly IUserAppService _userAppService;

        public UserController(IUserAppService userAppService, INotificator notificator)
            : base(notificator)
        {
            _userAppService = userAppService;
        }

        [HttpGet("get-all")]
        public async Task<IEnumerable<UserViewModel>> GetAll()
        {
            return await _userAppService.GetAll();
        }

        [HttpGet("get-user/{id}")]
        public async Task<ActionResult<UserViewModel>> GetById(int id)
        {
            var usuario = await _userAppService.GetById(id);

            if (usuario == null) return NotFound();

            return usuario;
        }

        [HttpPost("new-user")]
        public async Task<ActionResult<UserCreateViewModel>> Create(UserCreateViewModel userViewModel)
        {
            if (!ModelState.IsValid) return CustomResponse(ModelState);

            await _userAppService.Create(userViewModel);

            return CustomResponse(userViewModel);
        }
        
        [HttpPut("update-user/{id:int}")]
        public async Task<ActionResult<UserViewModel>> Update(int id, UserViewModel userViewModel)
        {
            if (id != userViewModel.Id)
            {
                NotificarErro("O id informado não é o mesmo que foi passado na query");
                return CustomResponse(userViewModel);
            }

            if (!ModelState.IsValid) return CustomResponse(ModelState);

            await _userAppService.Update(userViewModel);

            return CustomResponse(userViewModel);
        }

        [HttpDelete("delete/{id:int}")]
        public async Task<ActionResult<UserViewModel>> Delete(int id)
        {
            var userViewModel = await _userAppService.GetById(id);

            if (userViewModel == null) return NotFound();

            await _userAppService.Delete(id);

            return CustomResponse(userViewModel);
        }
    }
}
