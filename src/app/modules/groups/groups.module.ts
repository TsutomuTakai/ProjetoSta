import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Routes
import { GroupsRoutingModule } from './groups-routing.module';

//Components
import { AddGroupComponent } from './components/add-group/add-group.component';
import { EditGroupComponent } from './components/edit-group/edit-group.component';
import { ShowGroupsComponent } from './components/show-groups/show-groups.component';

@NgModule({
  imports: [
    CommonModule,
    GroupsRoutingModule
  ],
  declarations: [AddGroupComponent,
                EditGroupComponent,
                ShowGroupsComponent]
})
export class GroupsModule {

}
