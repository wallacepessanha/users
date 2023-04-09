using ADM.Users.Domain.Contracts;
using ADM.Users.Domain.Users;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace ADM.Users.Infra.Data.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly UsersContext _context;

        public UserRepository(UsersContext context)
        {
            _context = context;
        }

        public async Task<IList<User>> GetAll()
        {
            return await _context.Users.ToListAsync();
        }

        public async Task<User?> GetById(int id)
        {
            return await _context.Users.AsNoTracking().FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<User?> GetByEmail(string email)
        {
            return await _context.Users.FirstOrDefaultAsync(x => x.Email == email);
        }

        public async Task Create(User user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();
        }

        public async Task Update(User user)
        {            
            _context.Users.Update(user);
            await _context.SaveChangesAsync();
        }
        public async Task Delete(User user)
        {
            _context.Users.Remove(user);
            await _context.SaveChangesAsync();
        }
    }
}
