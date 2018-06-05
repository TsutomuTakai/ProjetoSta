import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Routes
import { UsersRoutingModule } from './users-routing.module';

//Components
import { EditUsersComponent } from './edit-users/edit-users.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { ShowUsersComponent } from './show-users/show-users.component';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  declarations: [EditUsersComponent,
                  AddUsersComponent,
                  ShowUsersComponent]
})
export class UsersModule { }
