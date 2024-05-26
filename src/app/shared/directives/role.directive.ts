import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Role } from '../../core/enums/role';
import { AuthService } from 'src/app/auth/services/auth.service';

@Directive({
  selector: '[appRole]'
})
export class RoleDirective {
  @Input() set appRole(roles: Role[]) {
    const currentRole = this.authService.getUserRole();
    if (roles.includes(currentRole)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  constructor(
    private authService: AuthService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

}
