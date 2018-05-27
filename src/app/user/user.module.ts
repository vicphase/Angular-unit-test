import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UserTableContainerComponent } from 'src/app/user/user-table-container/user-table-container.component';
import { UserTablePresentationComponent } from 'src/app/user/user-table-presentation/user-table-presentation.component';

import { UserFormContainerComponent } from './user-form-container/user-form-container.component';
import { UserFormPresentationComponent } from './user-form-presentation/user-form-presentation.component';
import { UserService } from './user.service';
import { RouterModule } from '@angular/router';

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
      }
    ])
  ],
  declarations: [
    UserTableContainerComponent,
    UserTablePresentationComponent,
    UserFormContainerComponent,
    UserFormPresentationComponent
  ],
  providers: [UserService]
})
export class UserModule {}
