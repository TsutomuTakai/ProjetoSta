
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Routes
import { HomeRoutingModule } from './main-routing.module';

//Modules
import { GroupsModule } from '@app/modules/groups/groups.module';
import { UsersModule } from '@app/modules/users/users.module';
import { UserModule } from '@app/modules/user/user.module';
import { EvaluationModule } from '@app/modules/evaluation/evaluation.module';
import { HistoryModule } from '@app/modules/history/history.module';

//Components
import { HomeComponent } from './components/home/home.component';
import { NotificationsComponent } from './components/notifications/notifications.component';

@NgModule({

  imports: [
    CommonModule,
    HomeRoutingModule,
    UsersModule,
    GroupsModule,
    UserModule,
    EvaluationModule,
    HistoryModule
  ],
  declarations: [HomeComponent, NotificationsComponent]
})
export class MainModule { }
