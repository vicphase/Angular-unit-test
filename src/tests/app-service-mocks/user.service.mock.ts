import { of } from 'rxjs';
import { user } from 'src/tests/interface-object-mocks/user.mock';

export const userServiceMock = {
  getUsers: () => of([]),
  getUser: () => of(user),
  createUser: () => of(user),
  updateUser: () => of(user),
  deleteUser: () => of(user)
};
