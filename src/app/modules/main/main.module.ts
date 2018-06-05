
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Routes
import { HomeRoutingModule } from './main-routing.module';

//Modules
import { GroupsModule } from '@app/modules/groups/groups.module'
import { UsersModule } from '@app/modules/users/users.module'
import { UserModule } from '@app/modules/user/user.module'

//Components
import { HomeComponent } from './components/home/home.component';

@NgModule({

  imports: [
    CommonModule,
    HomeRoutingModule,
    UsersModule,
    GroupsModule,
    UserModule
  ],
  declarations: [HomeComponent]
})
export class MainModule { }
