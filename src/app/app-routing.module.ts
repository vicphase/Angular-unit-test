import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: 'src/app/user/user.module#UserModule',
      },
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
