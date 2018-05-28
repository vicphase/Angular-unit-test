import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntil, tap } from 'rxjs/operators';
import { UserFormPresentationComponent } from 'src/app/user/user-form-presentation/user-form-presentation.component';

import { UserService } from '../user.service';

@Component({
  selector: 'app-user-form-container',
  templateUrl: './user-form-container.component.html',
  styleUrls: ['./user-form-container.component.scss'],
  providers: [UserService]
})
export class UserFormContainerComponent implements OnInit, OnDestroy {
  @ViewChild('form') userFormPresentationComponent: UserFormPresentationComponent;
  userId: string;
  existingUser: boolean;
  private destroy$ = new Subject<void>();
  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {
    this.existingUser = false;
  }

  ngOnInit() {
    this.userId = this.route.snapshot.params['id'];
    if (this.userId) {
      this.getUser(this.userId);
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  getUser(id: string): void {
    this.userService
      .getUser(id)
      .pipe(
        tap(user => {
          this.userFormPresentationComponent.populateFields(user);
          this.existingUser = true;
        })
      )
      .pipe(takeUntil(this.destroy$))
      .subscribe();
  }

  saveUser(): void {
    const formValue = this.userFormPresentationComponent.form.value;
    let saveUser$;
    if (this.existingUser) {
      saveUser$ = this.userService.updateUser(this.userId, formValue);
    } else {
      saveUser$ = this.userService.createUser(formValue);
    }
    saveUser$
      .pipe(tap(() => this.router.navigate([''])))
      .pipe(takeUntil(this.destroy$))
      .subscribe();
  }
}
