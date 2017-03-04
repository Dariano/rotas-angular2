import { Observable } from 'rxjs/Rx';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { Injectable } from '@angular/core';

@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<AlunoFormComponent> {

    constructor() { }

    canDeactivate(
        component: AlunoFormComponent,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {

        console.log('canDeactivate', component);        

        return component.podeMudarRota();
    }
}