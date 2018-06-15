import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Routes
import { GroupsRoutingModule } from './groups-routing.module';

//Components
import { CreateGroupComponent } from './components/create-group/create-group.component';
import { EditGroupComponent } from './components/edit-group/edit-group.component';
import { ListGroupsComponent } from './components/list-groups/list-groups.component';
import { FormViewComponent } from './components/form-view/form-view.component';

@NgModule({
  imports: [
    CommonModule,
    GroupsRoutingModule
  ],
  declarations: [CreateGroupComponent,
                EditGroupComponent,
                ListGroupsComponent,
                FormViewComponent]
})
export class GroupsModule {

}
