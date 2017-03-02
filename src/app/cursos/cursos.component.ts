import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html'
})
export class CursosComponent implements OnInit {

  cursos: any[];

  constructor(private cursusService: CursosService) { }

  ngOnInit() {
    this.cursos = this.cursusService.getCursos();
  }
}
