import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { ListUsersComponent } from '@app/modules/users/components/list-users/list-users.component';
import { CreateUsersComponent  } from '@app/modules/users/components/create-users/create-users.component';
import { EditUsersComponent } from '@app/modules/users/components/edit-users/edit-users.component';

const routes: Routes = [
  {
    path: '',
    component: ListUsersComponent
  },
  {
    path: 'addUser',
    component: CreateUsersComponent
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
