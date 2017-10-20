import { Injectable } from '@angular/core';
import { webConfig } from './../webConfig';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class apiPrefeitura{
    constructor(public http: Http, private webConfig: webConfig){}

    public auth(cartao: number){
        return this.http.get(`${this.webConfig.urlPrefeitura}authenticate/${cartao}`).map(res => res.json());
    }

    public getConsultaAgendadaService(cartao: number){
        return this.http.get(`${this.webConfig.urlPrefeitura}consultas/futuras/${cartao}`).map(res => res.json());
    }

    public getConsultaRealizadasService(cartao: number){
        return this.http.get(`${this.webConfig.urlPrefeitura}consultas/anteriores/${cartao}`).map(res => res.json());
    }

    public getConsultaAusentesService(cartao: number){
        return this.http.get(`${this.webConfig.urlPrefeitura}consultas/faltas/${cartao}`).map(res => res.json());
    }
}