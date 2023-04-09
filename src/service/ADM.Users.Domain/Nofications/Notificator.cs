using ADM.Users.Domain.Contracts;

namespace ADM.Users.Domain.Nofications
{
    public class Notificator : INotificator
    {
        private List<Notification> _notifications;

        public Notificator()
        {
            _notifications = new List<Notification>();
        }

        public void Handle(Notification notificacao)
        {
            _notifications.Add(notificacao);
        }

        public List<Notification> GetNotifications()
        {
            return _notifications;
        }

        public bool HaveNotification()
        {
            return _notifications.Any();
        }
    }
}
