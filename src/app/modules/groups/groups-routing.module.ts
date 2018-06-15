import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { ListGroupsComponent } from '@app/modules/groups/components/list-groups/list-groups.component';
import { CreateGroupComponent } from '@app/modules/groups/components/create-group/create-group.component';
import { EditGroupComponent } from '@app/modules/groups/components/edit-group/edit-group.component';
import {FormViewComponent} from "@app/modules/groups/components/form-view/form-view.component";


const routes: Routes = [
  {
    path: '',
    component: ListGroupsComponent
  },
  {
    path: 'addGroup',
    component: CreateGroupComponent
  },
  {
    path: 'editGroup',
    component: EditGroupComponent
  },
    {
        path: 'formView',
        component: FormViewComponent
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupsRoutingModule { }
