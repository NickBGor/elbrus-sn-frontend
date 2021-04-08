export function usersModule(instance) {
  return {
    login(payload) {
      return instance.post('/login', payload);
    },
    registration(payload) {
      return instance.post('/registration', payload);
    },
    checkAuth(payload) {
      return instance.post('/check', payload);
    },
    getAllUsers() {
      return instance.get('/students/all');
    },
    editProfile(payload) {
      return instance.post('/profile/edit', payload);
    },
    sendRecoveryMail(payload) {
      return instance.post('/profile/recovery', payload);
    },
    recoverPassword(payload) {
      return instance.patch('/profile/recovery', payload);
    },
  };
}
