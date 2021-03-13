import { instance } from './instance';
import { usersModule } from './modules/usersModule';
import { employersModule } from './modules/employersModule';

export default {
  user: usersModule(instance),
  employers: employersModule(instance),
};
