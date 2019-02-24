import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAccountRoutingModule } from './user-account-routing.module';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UserCrtListComponent } from './user-crt-list/user-crt-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  declarations: [UserprofileComponent, UserCrtListComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    UserAccountRoutingModule
  ]
})
export class UserAccountModule { }
