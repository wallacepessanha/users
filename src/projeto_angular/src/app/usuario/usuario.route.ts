import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovoComponent } from './novo/novo.component';
import { ListaComponent } from './lista/lista.component';
import { EditarComponent } from './editar/editar.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { ExcluirComponent } from './excluir/excluir.component';
import { UsuarioGuard } from './services/usuario.guard';
import { UsuarioResolve } from './services/usuario.resolve';
import { UsuarioComponent } from './usuario.component';

const usuarioRouterConfig: Routes = [
    {
        path: '', component: UsuarioComponent,
        children: [
            { path: 'listar-todos', component: ListaComponent },
            {
                path: 'adicionar-novo', component: NovoComponent,
                canDeactivate: [UsuarioGuard]
            },
            {
                path: 'editar/:id', component: EditarComponent,
                resolve: {
                    usuario: UsuarioResolve
                }
            },
            {
                path: 'detalhes/:id', component: DetalhesComponent,
                resolve: {
                    usuario: UsuarioResolve
                }
            },
            {
                path: 'excluir/:id', component: ExcluirComponent,
                resolve: {
                    usuario: UsuarioResolve
                }
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(usuarioRouterConfig)
    ],
    exports: [RouterModule]
})
export class UsuarioRoutingModule { }