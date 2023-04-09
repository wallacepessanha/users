import { Component, OnInit, ViewChildren, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControlName } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { FormBaseComponent } from 'src/app/base-components/form-base.component';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../services/usuario.service';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html',
})
export class NovoComponent extends FormBaseComponent implements OnInit {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  errors: any[] = [];
  model: NgbDateStruct;
  usuarioForm: FormGroup;
  usuario: Usuario = new Usuario();

  textoDocumento: string = 'CPF (requerido)';
  formResult: string = '';
  
  constructor(private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router,
    private toastr: ToastrService) {

    super();

    this.validationMessages = {
        nome: {
          required: 'Informe o Nome',
        },
        sobreNome: {
          required: 'Informe o SobreNome',
        },
        email: {
          required: 'Informe o email',
        },
        dataNascimento: {
          required: 'Informe a Data de Nascimento',
        },
        escolaridade: {
          required: 'Informe a Escolaridade',
        }
      };

    super.configurarMensagensValidacaoBase(this.validationMessages);
  }

  ngOnInit() {

    this.usuarioForm = this.fb.group({
        id: '',
        nome: ['', [Validators.required]],
        sobreNome: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        dataNascimento: ['', [Validators.required]],
        escolaridade: ['', [Validators.required]]
      });    
  }

  ngAfterViewInit(): void {
      super.configurarValidacaoFormularioBase(this.formInputElements, this.usuarioForm)
  }

  adicionarUsuario() {
    if (this.usuarioForm.dirty && this.usuarioForm.valid) {

      this.usuario = Object.assign({}, this.usuario, this.usuarioForm.value);    

      this.usuarioService.novoUsuario(this.usuario)
        .subscribe({
          next: sucesso => { this.processarSucesso(sucesso) },
          error: falha => { this.processarFalha(falha) }
        });
    }
  }

  processarSucesso(response: any) {
    this.usuarioForm.reset();
    this.errors = [];

    this.mudancasNaoSalvas = false;

    let toast = this.toastr.success(`Usuário ${response.nome} cadastrado com sucesso!`, 'Sucesso!');
    if (toast) {
      toast.onHidden.subscribe(() => {
        this.router.navigate(['/usuarios/listar-todos']);
      });
    }
  }

  processarFalha(fail: any) {
    this.errors = fail.error.errors;
    this.toastr.error('Ocorreu um erro!', 'Opa :(');
  }
}