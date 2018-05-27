import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { User } from 'src/app/models/user.model';

import { UserService } from '../user.service';
import { UserTableContainerComponent } from './user-table-container.component';
import { userServiceMock } from 'src/tests/app-service-mocks/user.service.mock';
import { UserModule } from '../user.module';

describe('UserTableContainerComponent', () => {
  let component: UserTableContainerComponent;
  let fixture: ComponentFixture<UserTableContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserTableContainerComponent],
      providers: [{ provide: UserService, useValue: userServiceMock }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTableContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should get the users from the user service', () => {
    const user: User = {
      id: '1',
      firstName: 'test',
      lastName: 'test'
    };
    component.users = [];
    spyOn(component['userService'], 'getUsers').and.returnValue(of([user]));

    component.getUsers();

    expect(component['userService'].getUsers).toHaveBeenCalled();
    expect(component.users.length).toEqual(1);
  });
  it('should call the delete user method from the user service', () => {
    const user: User = {
      id: '1',
      firstName: 'test',
      lastName: 'test'
    };
    component.users = [user];
    spyOn(component['userService'], 'deleteUser').and.returnValue(of(user));

    component.deleteUser(user);

    expect(component['userService'].deleteUser).toHaveBeenCalledWith('1');
    expect(component.users.length).toEqual(0);
  });
});
