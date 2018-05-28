import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { user } from '../../tests/interface-object-mocks/user.mock';
import { HttpError } from '../models/http-error.model';
import { User } from '../models/user.model';
import { UserService } from './user.service';

fdescribe('UserService', () => {
  let service: UserService;
  let httpTestingControler: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    service = TestBed.get(UserService);
    httpTestingControler = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should get the array of users', () => {
    // test response
    service.getUsers().subscribe((data: Array<User>) => {
      // Act
      expect(data.length).toEqual(1); // Assert
    });

    // test request
    const req = httpTestingControler.expectOne(service.userUrl);
    req.flush(<Array<User>>[user]); // Arrange
  });
  it('should handle the error when the users api is not available', () => {
    service.getUsers().subscribe(
      (data: Array<User>) => {
        fail('should have thrown an error');
      },
      (error: HttpError) => {
        expect(error.status).toEqual(500);
        expect(error.message).toEqual('An error ocurred retreiving data');
      }
    );

    const req = httpTestingControler.expectOne(service.userUrl);
    req.flush('error', {
      status: 500,
      statusText: 'Error'
    });
  });
});
