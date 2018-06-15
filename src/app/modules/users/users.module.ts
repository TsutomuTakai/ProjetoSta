import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Routes
import { UsersRoutingModule } from './users-routing.module';

//Components
import { EditUsersComponent } from './components/edit-users/edit-users.component';
import { CreateUsersComponent } from './components/create-users/create-users.component';
import { ListUsersComponent } from './components/list-users/list-users.component';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  declarations: [EditUsersComponent,
                  CreateUsersComponent,
                  ListUsersComponent]
})
export class UsersModule { }
