// Initializes the `taskManager` service on path `/task-manager`
import { Application } from '@feathersjs/feathers';
import createService from 'feathers-mongoose';
import createModel from '../../models/task-manager.model';
import hooks from './task-manager.hooks';

export default function (app: Application) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/task-manager', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('task-manager');

  service.hooks(hooks);
}
