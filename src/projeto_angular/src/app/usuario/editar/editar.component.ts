import { Component, OnInit, ViewChildren, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControlName } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

import { FormBaseComponent } from 'src/app/base-components/form-base.component';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../services/usuario.service';
import { NgbDateAdapter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Moment } from 'moment';
import * as moment from 'moment';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html'
})
export class EditarComponent extends FormBaseComponent implements OnInit {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  errors: any[] = [];
  usuarioForm: FormGroup;

  usuario: Usuario = new Usuario();
  model: NgbDateStruct;
  textoData: string = '';

  constructor(private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private dateAdaptor: NgbDateAdapter<Moment>) {

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
        invalid: 'O campo está com a data inválida'
      },
      escolaridade: {
        required: 'Informe a Escolaridade',
      }
    };

    super.configurarMensagensValidacaoBase(this.validationMessages);

    this.usuario = this.route.snapshot.data['usuario'];
  }

  ngOnInit() {

    this.spinner.show();

    this.usuarioForm = this.fb.group({
      id: '',
      nome: ['', [Validators.required]],
      sobreNome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      dataNascimento: ['', [Validators.required]],
      escolaridade: ['', [Validators.required]]
    });

    this.preencherForm();

    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

  preencherForm() {
    this.usuarioForm.patchValue({
      id: this.usuario.id,
      nome: this.usuario.nome,
      sobreNome: this.usuario.sobreNome,
      dataNascimento: this.dateAdaptor.toModel(this.dateAdaptor.fromModel(moment(this.usuario.dataNascimento))),
      email: this.usuario.email,
      escolaridade: this.usuario.escolaridade
    });
  }

  validarFormatoData(){
    this.textoData = this.usuarioForm.controls.dataNascimento.errors?.ngbDate.invalid;
  }
  ngAfterViewInit() {  
    super.configurarValidacaoFormularioBase(this.formInputElements, this.usuarioForm);
  }   

  editarUsuario() {
    if (this.usuarioForm.dirty && this.usuarioForm.valid) {

      this.usuario = Object.assign({}, this.usuario, this.usuarioForm.value); 

      this.usuarioService.atualizarUsuario(this.usuario)
        .subscribe({
         next: sucesso => { this.processarSucesso(sucesso) },
         error: falha => { this.processarFalha(falha) }
        });
    }
  }

  processarSucesso(response: any) {
    this.errors = [];

    let toast = this.toastr.success(`Usuario ${response.nome} atualizado com sucesso!`, 'Sucesso!');
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
