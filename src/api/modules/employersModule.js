export function employersModule(instance) {
  return {
    getEmployers() {
      return instance.get('/employers/all');
    },
    createEmployer(payload) {
      return instance.post('/employers/create-employer', payload);
    },
    deleteEmployer(payload) {
      return instance.delete('/employers/delete-employer', {
        data: payload,
      });
    },
  };
}
