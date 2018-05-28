import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { activatedRouteMock } from 'src/tests/angular-service-mocks/activated-route.mock';
import { routerMock } from 'src/tests/angular-service-mocks/router.mock';
import { userServiceMock } from 'src/tests/app-service-mocks/user.service.mock';
import { user } from 'src/tests/interface-object-mocks/user.mock';

import { UserService } from '../user.service';
import { UserFormContainerComponent } from './user-form-container.component';

@Component({
  selector: 'app-user-form-presentation',
  template: ''
})
class UserFormPresentationMockComponent {
  populateFields = () => {};
}

describe('UserFormContainerComponent', () => {
  let component: UserFormContainerComponent;
  let fixture: ComponentFixture<UserFormContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserFormContainerComponent, UserFormPresentationMockComponent],
      providers: [{ provide: ActivatedRoute, useValue: activatedRouteMock }, { provide: Router, useValue: routerMock }],
      schemas: [NO_ERRORS_SCHEMA]
    });
    TestBed.overrideProvider(UserService, { useValue: userServiceMock });
    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should get the user and populate it on the form', () => {
    spyOn(component['userService'], 'getUser').and.returnValue(of(user));
    spyOn(component.userFormPresentationComponent, 'populateFields');

    component.getUser('1');

    expect(component['userService'].getUser).toHaveBeenCalledWith('1');
    expect(component.userFormPresentationComponent.populateFields).toHaveBeenCalledWith(user);
  });
});
