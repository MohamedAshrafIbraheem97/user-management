import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RoleDirective } from './directives/role.directive';

@NgModule({
  declarations: [
    NavBarComponent,
    RoleDirective
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    NavBarComponent,
    RoleDirective
  ]
})
export class SharedModule { }
