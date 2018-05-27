import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl = 'api/user';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>(this.userUrl);
  }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(this.userUrl.concat('/' + id));
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.userUrl, user);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(this.userUrl.concat('/' + user.id), user);
  }

  deleteUser(id: string): Observable<User> {
    return this.http.delete<User>(this.userUrl.concat('/' + id));
  }
}
