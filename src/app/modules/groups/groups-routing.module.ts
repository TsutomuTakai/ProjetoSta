import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { ShowGroupsComponent } from '@app/modules/groups/components/show-groups/show-groups.component';
import { AddGroupComponent } from '@app/modules/groups/components/add-group/add-group.component';
import { EditGroupComponent } from '@app/modules/groups/components/edit-group/edit-group.component';


const routes: Routes = [
  {
    path: '',
    component: ShowGroupsComponent
  },
  {
    path: 'addGroup',
    component: AddGroupComponent
  },
  {
    path: 'editGroup',
    component: EditGroupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupsRoutingModule { }
