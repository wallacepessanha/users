import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html'
})
export class ExcluirComponent {

  usuario: Usuario = new Usuario();
  errors: any[] = [];

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) {

    this.usuario = this.route.snapshot.data['usuario'];
  }  

  excluirEvento() {
    this.usuarioService.excluirUsuario(this.usuario.id)
      .subscribe({
        next: sucesso => { this.sucessoExclusao(sucesso) },
        error: falha => { this.falha(falha) }
    });
  }

  sucessoExclusao(evento: any) {

    const toast = this.toastr.success(`Usuario ${evento.nome} excluido com Sucesso!`, 'Good bye :D');
    if (toast) {
      toast.onHidden.subscribe(() => {
        this.router.navigate(['/usuarios/listar-todos']);
      });
    }
  }

  falha(fail: any) {
    this.errors = fail.error.errors;
    this.toastr.error('Houve um erro no processamento!', 'Ops! :(');
  }
}
