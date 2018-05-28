import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { userServiceMock } from 'src/tests/app-service-mocks/user.service.mock';

import { UserService } from '../user.service';
import { UserTableComponent } from './user-table.component';

describe('UserTableComponent', () => {
  let component: UserTableComponent;
  let fixture: ComponentFixture<UserTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserTableComponent],
      providers: [{ provide: UserService, useValue: userServiceMock }],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTableComponent);
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
