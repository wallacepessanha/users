using ADM.Users.Domain.Nofications;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ADM.Users.Domain.Contracts
{
    public interface INotificator
    {
        bool HaveNotification();
        List<Notification> GetNotifications();
        void Handle(Notification notification);
    }
}
