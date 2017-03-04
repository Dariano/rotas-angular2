import { AuthService } from './../login/auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    console.log('AuthGuard.canActivate');
    

    return this.verificarAcesso();
  }

  private verificarAcesso() {
    if (this.authService.usuarioEstaAutenticado()) {
      return true
    }

    this.router.navigate(['/login']);

    return false;
  }

  canLoad(route: Router): Observable<boolean> | Promise<boolean> | boolean {
    console.log('AuthGuard.canLoad');

    return this.verificarAcesso();
  }

}
