import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { ViewUserComponent } from './components/view-user/view-user.component';


@NgModule({
  declarations: [
    AddUserComponent,
    EditUserComponent,
    ListUsersComponent,
    ViewUserComponent
  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule
  ]
})
export class UserManagementModule { }
