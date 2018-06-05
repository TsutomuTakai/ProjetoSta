import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Routes
import { UserRoutingModule } from './user-routing.module';

//Components
import { EditUserComponent } from './edit-user/edit-user.component';
import { AltPasswordComponent } from './alt-password/alt-password.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  declarations: [EditUserComponent,
                AltPasswordComponent]
})
export class UserModule { }
