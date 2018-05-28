import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { UserFormContainerComponent } from './user-form-container/user-form-container.component';
import { UserFormPresentationComponent } from './user-form-presentation/user-form-presentation.component';
import { UserTableComponent } from './user-table/user-table.component';
import { UserService } from './user.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserTableComponent
      },
      {
        path: 'user',
        component: UserFormContainerComponent
      },
      {
        path: 'user/:id',
        component: UserFormContainerComponent
      }
    ])
  ],
  declarations: [UserTableComponent, UserFormContainerComponent, UserFormPresentationComponent],
  providers: [UserService]
})
export class UserModule {}
