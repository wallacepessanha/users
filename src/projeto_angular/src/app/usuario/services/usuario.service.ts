import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { BaseService } from 'src/app/services/base.service';
import { Usuario } from "../models/usuario";

@Injectable()
export class UsuarioService extends BaseService {

    usuario: Usuario = new Usuario();

    constructor(private http: HttpClient) { super() }

    obterTodos(): Observable<Usuario[]> {
        return this.http
            .get<Usuario[]>(this.UrlServiceV1 + "users/get-all")
            .pipe(catchError(super.serviceError));
    }

    obterPorId(id: string): Observable<Usuario> {
        return this.http
            .get<Usuario>(this.UrlServiceV1 + "users/get-user/" + id)
            .pipe(catchError(super.serviceError));
    }

    novoUsuario(usuario: Usuario): Observable<Usuario> {
        return this.http
            .post(this.UrlServiceV1 + "users/new-user/", usuario)
            .pipe(
                map(super.extractData),
                catchError(super.serviceError));
    }

    atualizarUsuario(usuario: Usuario): Observable<Usuario> {
        return this.http
            .put(this.UrlServiceV1 + "users/update-user/" + usuario.id, usuario)
            .pipe(
                map(super.extractData),
                catchError(super.serviceError));
    }

    excluirUsuario(id: string): Observable<Usuario> {
        return this.http
            .delete(this.UrlServiceV1 + "users/delete/" + id)
            .pipe(
                map(super.extractData),
                catchError(super.serviceError));
    }    
}
