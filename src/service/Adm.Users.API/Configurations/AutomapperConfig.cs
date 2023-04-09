using ADM.Users.API.Models;
using ADM.Users.Domain.Users;
using AutoMapper;

namespace ADM.Users.API.Configurations
{
    public class AutomapperConfig : Profile
    {
        public AutomapperConfig()
        {
            CreateMap<User, UserCreateViewModel>().ReverseMap();
            CreateMap<User, UserViewModel>().ReverseMap();
            CreateMap<Scholarity, ScholarityViewModel>().ReverseMap();
        }
    }
}
