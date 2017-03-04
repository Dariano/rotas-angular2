import { Aluno } from './aluno';
import { Injectable } from '@angular/core';

@Injectable()
export class AlunosService {

  private alunos: Aluno[] = [
    { id: 1, nome: 'Dariano', email: 'dariano@hotmail.com' },
    { id: 2, nome: 'Sofia', email: 'sofia@hotmail.com' },
    { id: 3, nome: 'Dariele', email: 'dariele@hotmail.com' }
  ];

  constructor() { }

  getAlunos() {
    return this.alunos;
  }

  getAluno(id) {
    return this.alunos.find(aluno => aluno.id == id);
  }
}
