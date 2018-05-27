import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { User } from 'src/app/models/user.model';

import { UserTablePresentationComponent } from './user-table-presentation.component';

describe('UserTablePresentationComponent', () => {
  let component: UserTablePresentationComponent;
  let fixture: ComponentFixture<UserTablePresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserTablePresentationComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTablePresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  // it('should add a user to the users array', () => {
  //   const user: User = {
  //     id: 'test',
  //     firstName: 'test',
  //     lastName: 'test'
  //   };
  //   component.users = [];                       // Arrange

  //   component.addUser(user);                    // Act

  //   expect(component.users.length).toEqual(1);  // Assert
  // });
});
