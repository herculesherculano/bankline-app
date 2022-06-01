import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'https://hercules-dio-bankline-api.herokuapp.com/';


@Injectable({
  providedIn: 'root'
})
export class MovimentacaoService {

  constructor(private http: HttpClient) { }
  
  list(): Observable<any> {
    return this.http.get(`${baseUrl}/movimentacoes`);
  }
  // adicionando o método de inclusão (POST) via API
  create(movimentacao:any): Observable<any> {
    return this.http.post(`${baseUrl}/movimentacoes`,movimentacao);
  }

  findByIdConta(idConta:any): Observable<any> {
    return this.http.get(`${baseUrl}/movimentacoes/${idConta}`);
  }

}
