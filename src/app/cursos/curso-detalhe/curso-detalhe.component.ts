import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { CursosService } from './../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html'
})
export class CursoDetalheComponent implements OnInit {

  id: Number;
  incricao: Subscription;
  curso: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cursoService: CursosService) {
   
    // this.id = this.route.snapshot.params['id'];
    // console.log(this.route);
  }

  ngOnInit() {
    this.incricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params["id"];

        this.curso = this.cursoService.getCurso(this.id);
        
        if(!this.curso){
          this.router.navigate(['/naoEncontrado']);
        }
      }
    )
  }

  ngOnDestroy() {
    this.incricao.unsubscribe();
  }
}
