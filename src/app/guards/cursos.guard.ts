import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class CursosGuard implements CanActivateChild {

  constructor() { }


  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    console.log('canActivateChild', state);    
    
    return true;
  }
}
