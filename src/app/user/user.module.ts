import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { UserFormContainerComponent } from './user-form-container/user-form-container.component';
import { UserFormPresentationComponent } from './user-form-presentation/user-form-presentation.component';
import { UserTableContainerComponent } from './user-table-container/user-table-container.component';
import { UserService } from './user.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserTableContainerComponent
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
  declarations: [UserTableContainerComponent, UserFormContainerComponent, UserFormPresentationComponent],
  providers: [UserService]
})
export class UserModule {}
