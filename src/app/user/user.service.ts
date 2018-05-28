import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';

import { HttpError } from '../models/http-error.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl = environment.apiUrl.concat('/users');

  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse): Observable<HttpError> {
    const dataError: HttpError = {
      status: error.status,
      message: 'An error ocurred retreiving data'
    };
    return throwError(dataError);
  }

  getUsers(): Observable<Array<User> | HttpError> {
    return this.http.get<Array<User>>(this.userUrl).pipe(catchError(error => this.handleError(error)));
  }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(this.userUrl.concat('/' + id));
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.userUrl, user);
  }

  updateUser(id: string, user: User): Observable<User> {
    return this.http.put<User>(this.userUrl.concat('/' + id), user);
  }

  deleteUser(id: string): Observable<User> {
    return this.http.delete<User>(this.userUrl.concat('/' + id));
  }
}
