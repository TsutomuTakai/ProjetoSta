import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './main-routing.module';
import { ListGroupsComponent } from './list-groups/list-groups.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { NotificationsComponent } from './notifications/notifications.component';

@NgModule({

  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent,
                ListGroupsComponent,
                ListUsersComponent,
                NotificationsComponent]
})
export class MainModule { }
