import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { EditUserComponent } from '@app/modules/user/edit-user/edit-user.component';
import { AltPasswordComponent } from '@app/modules/user/alt-password/alt-password.component';

const routes: Routes = [
  {
    path: '',
    component: EditUserComponent
  },
  {
    path: 'altPassword',
    component: AltPasswordComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
