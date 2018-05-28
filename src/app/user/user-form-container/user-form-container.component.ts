import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { UserFormPresentationComponent } from 'src/app/user/user-form-presentation/user-form-presentation.component';
import { tap, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-user-form-container',
  templateUrl: './user-form-container.component.html',
  styleUrls: ['./user-form-container.component.scss'],
  providers: [UserService]
})
export class UserFormContainerComponent implements OnInit, OnDestroy {
  @ViewChild('form') userFormPresentationComponent: UserFormPresentationComponent;
  private destroy$ = new Subject<void>();
  constructor(private userService: UserService, private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.getUser(id);
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
        })
      )
      .pipe(takeUntil(this.destroy$))
      .subscribe();
  }
}
