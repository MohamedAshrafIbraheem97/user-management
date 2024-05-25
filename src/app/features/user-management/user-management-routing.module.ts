import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListUsersComponent } from "./components/list-users/list-users.component";
import { authGuard } from "src/app/core/guards/auth.guard";
import { roleGuard } from "src/app/core/guards/role.guard";
import { Role } from "src/app/core/enums/role";
import { AddUserComponent } from "./components/add-user/add-user.component";
import { EditUserComponent } from "./components/edit-user/edit-user.component";
import { userResolver } from "./resolvers/user.resolver";
import { ViewUserComponent } from "./components/view-user/view-user.component";
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "users",
    component: ListUsersComponent,
    canActivate: [authGuard, roleGuard],
    data: { expectedRole: Role.Admin },
  },
  {
    path: "users/add",
    component: AddUserComponent,
    canActivate: [authGuard, roleGuard],
    data: { expectedRole: Role.Admin },
  },
  {
    path: "users/edit/:id",
    component: EditUserComponent,
    canActivate: [authGuard, roleGuard],
    data: { expectedRole: Role.Admin },
    resolve: { user: userResolver },
  },
  {
    path: "users/view/:id",
    component: ViewUserComponent,
    canActivate: [authGuard],
    resolve: { user: userResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserManagementRoutingModule {}
