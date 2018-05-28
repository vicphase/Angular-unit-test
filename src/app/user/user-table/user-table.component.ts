import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';

import { UserService } from '../user.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit, OnDestroy {
  users: Array<User>;
  private destroy$ = new Subject<void>();
  constructor(private userService: UserService) {
    this.users = [];
  }

  ngOnInit() {
    this.getUsers();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  getUsers(): void {
    this.userService
      .getUsers()
      .pipe(
        tap((users: Array<User>) => {
          this.users = users;
        })
      )
      .pipe(takeUntil(this.destroy$))
      .subscribe();
  }

  deleteUser(user: User): void {
    this.userService
      .deleteUser(user.id)
      .pipe(
        tap(users => {
          const index = this.users.indexOf(user);
          this.users.splice(index, 1);
        })
      )
      .pipe(takeUntil(this.destroy$))
      .subscribe();
  }
}
