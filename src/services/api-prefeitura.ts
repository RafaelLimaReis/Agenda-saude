import { Injectable } from '@angular/core';
import { webConfig } from './../webConfig';
import { Http, RequestOptions, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class apiPrefeitura{
    private headers = {};
    private body = null;

    constructor(public http: Http, private webConfig: webConfig){
      this.headers = this.setHeaders();
      this.body = this.setBody();
    }

    private setHeaders(): RequestOptions {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization', 'Basic ' + 'AxnJwWXgEU6nYKZgRM3jbJGdeUyGZcKC'); // puxar token de storage

      return new RequestOptions({ headers: headers });
    }

    private setBody(){
      let body = 888144142750007; // puxar cns do storage

      return body;
    }

    /** inutilizado */
    public auth(cartao: number){
      return this.http.get(`${this.webConfig.urlPrefeitura}authenticate/${cartao}`).map(res => res.json());
    }
    //

    public getConsultaAgendadaService(cartao: number){
        return this.http.post(`${this.webConfig.urlPrefeitura}agendamento/consultasagendadas`,this.body,this.headers).map(res => res.json());
    }

    public getConsultaRealizadasService(cartao: number){
        return this.http.post(`${this.webConfig.urlPrefeitura}agendamento/consultasrealizadas`, this.body, this.headers).map(res => res.json());
    }

    public getConsultaAusentesService(cartao: number){
        return this.http.post(`${this.webConfig.urlPrefeitura}agendamento/consultasausentes`, this.body, this.headers).map(res => res.json());
    }

    public getDadosCadastroService(){
        return this.http.get(`${this.webConfig.urlPrefeitura}dadosCadastro`).map(res => res.json());
    }

    public getMotivosCadastroService(id:number){
        return this.http.get(`${this.webConfig.urlPrefeitura}motivo/${id}`).map(res => res.json());
    }

    public solicitarPreAgendamento(dados:any){
        return this.http.post(`${this.webConfig.urlPrefeitura}solicitarPreAgendamento`,dados).subscribe(res =>{
            console.log(res);
        });
    }
}
