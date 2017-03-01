import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html'
})
export class CursoDetalheComponent implements OnInit {

  id: string;
  incricao: Subscription;

  constructor(private route: ActivatedRoute) {
    // this.id = this.route.snapshot.params['id'];
    // console.log(this.route);
  }

  ngOnInit() {
    this.incricao = this.route.params.subscribe(
      (params) => {
        this.id = params["id"];
      }
    )
  }

  ngOnDestroy() {
    this.incricao.unsubscribe();
  }
}
