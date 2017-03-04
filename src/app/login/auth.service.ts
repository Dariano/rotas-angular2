import { Router } from '@angular/router';
import { Usuario } from './usuario';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AuthService {

  private usuarioAutenticado: boolean = false;
  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario) {

    this.usuarioAutenticado = usuario.nome == 'dariano' && usuario.senha == '123456';

    if (this.usuarioAutenticado) {
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['/']);
    }
    else {
      this.mostrarMenuEmitter.emit(false);
    }
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }

}
