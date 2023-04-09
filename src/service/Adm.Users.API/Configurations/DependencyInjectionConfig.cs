using ADM.Users.API.Application.Services;
using ADM.Users.Domain.Contracts;
using ADM.Users.Domain.Nofications;
using ADM.Users.Domain.Services;
using ADM.Users.Infra.Data;
using ADM.Users.Infra.Data.Repository;
using Microsoft.Extensions.Options;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace ADM.Users.API.Configurations
{
    public static class DependencyInjectionConfig
    {
        public static IServiceCollection ResolveDependencies(this IServiceCollection services)
        {
            services.AddScoped<UsersContext>();
            services.AddScoped<IUserRepository, UserRepository>();

            services.AddScoped<INotificator, Notificator>();
            services.AddScoped<IUserService, UserService>();
            services.AddScoped<IUserAppService, UserAppService>();

            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();

            return services;
        }
    }
}
