import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupsRoutingModule } from './groups-routing.module';
import { AddGroupComponent } from './add-group/add-group.component';
import { EditGroupComponent } from './edit-group/edit-group.component';
import { ShowGroupsComponent } from './show-groups/show-groups.component';

@NgModule({
  imports: [
    CommonModule,
    GroupsRoutingModule
  ],
  declarations: [AddGroupComponent,
                EditGroupComponent,
                ShowGroupsComponent]
})
export class GroupsModule { }
