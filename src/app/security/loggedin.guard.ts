import { CanLoad, Route, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { LoginService } from './login/login.service';

@Injectable()
export class LoggedInGuard implements CanLoad, CanActivate {

  constructor(private loginService: LoginService) {}

  checkAuthencation(path: string): boolean {
    const loggedIn = this.loginService.isLoggedIn();
    if (!loggedIn) {
      this.loginService.handleLogin(`/${path}`);
    }
    return loggedIn;
  }

  canLoad(route: Route): boolean {
    console.log('canLoad');
    return this.checkAuthencation(route.path);
  }

  canActivate(activatedRoute: ActivatedRouteSnapshot,
              routeState: RouterStateSnapshot): boolean {
    console.log('canActivate');
    return this.checkAuthencation(activatedRoute.routeConfig.path);
  }

}
