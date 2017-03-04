import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AlunosGuard implements CanActivateChild {

  constructor() { }


  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    console.log('canActivateChild');
    
    return true;
  }
}
