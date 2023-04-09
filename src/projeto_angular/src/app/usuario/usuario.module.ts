import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NovoComponent } from './novo/novo.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { ListaComponent } from './lista/lista.component';

import { NgxSpinnerModule } from "ngx-spinner";

import { EditarComponent } from './editar/editar.component';
import { ExcluirComponent } from './excluir/excluir.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { UsuarioService } from './services/usuario.service';
import { UsuarioResolve } from './services/usuario.resolve';
import { UsuarioComponent } from './usuario.component';
import { UsuarioRoutingModule } from './usuario.route';
import { UsuarioGuard } from './services/usuario.guard';
import { NgbAlertModule, NgbDateAdapter, NgbDatepickerModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateMomentAdapter } from './shared/datepicker-adapter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    UsuarioComponent,
    NovoComponent,
    ListaComponent,
    EditarComponent,
    ExcluirComponent,
    DetalhesComponent,
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    NgbModule,
    NgbDatepickerModule,
    NgbAlertModule
  ],
  providers: [
    UsuarioService,
    UsuarioResolve,
    UsuarioGuard,
    { provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }
  ]
})
export class UsuarioModule { }
