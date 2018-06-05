import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { ShowGroupsComponent } from '@app/modules/groups/show-groups/show-groups.component';
import { AddGroupComponent } from '@app/modules/groups/add-group/add-group.component';
import { EditGroupComponent } from '@app/modules/groups/edit-group/edit-group.component';

const routes: Routes = [
  {
    path: '',
    component: ShowGroupsComponent
  },
  {
    path: 'addUser',
    component: AddGroupComponent
  },
  {
    path: 'editGroup',
    component: EditGroupComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupsRoutingModule { }
