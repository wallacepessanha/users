import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html'
})
export class DetalhesComponent {

  usuario: Usuario = new Usuario();  

  constructor(
    private route: ActivatedRoute) {
      this.usuario = this.route.snapshot.data['usuario'];
    }  
}
