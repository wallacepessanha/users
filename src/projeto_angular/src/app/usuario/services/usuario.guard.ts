import { Injectable } from '@angular/core';
import { Router, CanDeactivate } from '@angular/router';
import { NovoComponent } from '../novo/novo.component';

@Injectable()
export class UsuarioGuard implements CanDeactivate<NovoComponent> {
    canDeactivate(component: NovoComponent) {
        if(component.mudancasNaoSalvas) {
            return window.confirm('Tem certeza que deseja abandonar o preenchimento do formulario?');
        }        
        return true
    }    
}