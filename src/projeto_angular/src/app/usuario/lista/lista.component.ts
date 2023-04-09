import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../services/usuario.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html'
})
export class ListaComponent implements OnInit {

  public usuarios: Usuario[];
  errorMessage: string;

  constructor(private usuarioService: UsuarioService,    
    private spinner: NgxSpinnerService,) { }

  ngOnInit(): void {
    this.spinner.show();
    this.usuarioService.obterTodos()
      .subscribe({
        next: usuarios => { this.usuarios = usuarios },
        error: error => { 
          this.errorMessage = error;
          this.spinner.hide();
        },
        complete: () => { this.spinner.hide();}
    });    
  }  
}
