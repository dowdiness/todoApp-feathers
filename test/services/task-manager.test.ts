import app from '../../src/app';

describe('\'taskManager\' service', () => {
  it('registered the service', () => {
    const service = app.service('task-manager');
    expect(service).toBeTruthy();
  });
});
