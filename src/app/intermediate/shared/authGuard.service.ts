import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MyAuthService } from '../../core/my-auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  public lets: boolean;
  constructor(
    private myAuthService: MyAuthService,
    private router: Router
  ) {}
  /**
   * checks it is possible to open pages
   * @param route - ActivatedRouteSnapshot
   * @param state - RouterStateSnapshot
   * @returns boolean
   */
  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.lets = this.myAuthService.canActivate();
    if (this.lets) {
      this.router.navigate(['']);
      return false;
    }else {
      return true;
    }
  }
}
