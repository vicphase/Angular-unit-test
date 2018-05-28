import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { activatedRouteMock } from '../../../tests/angular-services-mocks/activated-route.mock';
import { userServiceMock } from '../../../tests/app-service-mocks/user.service.mock';
import { user } from '../../../tests/interface-object-mocks/user.mock';
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
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteMock }
      ]
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
