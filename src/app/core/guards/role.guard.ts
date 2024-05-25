import { inject } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from "@angular/router";
import { AuthService } from "src/app/auth/services/auth.service";
import { Role } from "../enums/role";

export const roleGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const expectedRole = route.data["expectedRole"] as Role;

  if (authService.isLoggedIn() && authService.getUserRole() === expectedRole) {
    return true;
  } else {
    router.navigate(["/user-management"]);
    return false;
  }
};
