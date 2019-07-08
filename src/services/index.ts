import { Application } from '@feathersjs/feathers';
import taskManager from './task-manager/task-manager.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application) {
  app.configure(taskManager);
}
