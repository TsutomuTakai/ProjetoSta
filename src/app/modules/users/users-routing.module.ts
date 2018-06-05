import { NgModule } from '@angular/core';

//Routes
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
    path: 'addGroup',
    component: AddUsersComponent
  },
  {
    path: 'editGroup',
    component: EditUsersComponent
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
export class UsersRoutingModule { }
