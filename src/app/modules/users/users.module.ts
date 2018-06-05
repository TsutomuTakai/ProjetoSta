import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Routes
import { UsersRoutingModule } from './users-routing.module';

//Components
import { EditUsersComponent } from './components/edit-users/edit-users.component';
import { AddUsersComponent } from './components/add-users/add-users.component';
import { ShowUsersComponent } from './components/show-users/show-users.component';

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
