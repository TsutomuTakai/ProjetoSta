import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { ShowUsersComponent } from '@app/modules/users/components/show-users/show-users.component';
import { AddUsersComponent  } from '@app/modules/users/components/add-users/add-users.component';
import { EditUsersComponent } from '@app/modules/users/components/edit-users/edit-users.component';

const routes: Routes = [
  {
    path: '',
    component: ShowUsersComponent
  },
  {
    path: 'addUser',
    component: AddUsersComponent
  },
  {
    path: 'editUser',
    component: EditUsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
