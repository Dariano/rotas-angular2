import { Subscription } from 'rxjs/Rx';
import { AlunosService } from './../alunos.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html'
})
export class AlunoFormComponent implements OnInit {

  aluno: any;
  inscricao: Subscription;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params.id;
        
        this.aluno = this.alunosService.getAluno(id);

        if(!this.aluno){
          this.aluno = {};
        }
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
