import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Role } from 'src/app/core/enums/role';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  Role = Role;
  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }

  getRole(): Role {
    return this.authService.getUserRole();
  }
}
