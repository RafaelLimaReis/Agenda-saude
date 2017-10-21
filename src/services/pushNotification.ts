import { LocalNotifications } from '@ionic-native/local-notifications';
import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class pushNotification{
    constructor(private localNotifications: LocalNotifications){}

    convertTime(time){
        return time.slice(0,5);
    }
    
    createNotification(consultas: any){
        this.localNotifications.clearAll();
        var idCont = 0;

        consultas.forEach(data => {
            
            const dayActual = moment();
            var dayMin = moment(data.DataAgendamento,'YYYY/MM/DD').subtract(10, 'days');
            dayMin.add(10,'hours');
            moment.locale('pt-br');            
            if(dayMin.diff(dayActual,'days') >= 0){
                //10 dias antes
                idCont++;
                this.localNotifications.schedule({
                    id: idCont,
                    icon: '../assets/img/icon_app.png',
                    title: `Agenda Saude - ${data.Especialidade}`,
                    text: `Você tem uma consulta dia: ${moment(data.DataAgendamento).format('l')} - ${this.convertTime(data.HorarioParaPacienteChegar)} hr`,
                    at: new Date(dayMin.toDate())
                });
                for (let cont = 10; cont >= 0;){
                    dayMin.add(2, 'days');
                    let date = new Date(dayMin.toDate());
                    if (dayMin.diff(data.DataAgendamento, 'days') < 0) {
                        idCont++;    
                        this.localNotifications.schedule({
                            id: idCont,
                            icon: './www/assets/img/icon_app.png',
                            title: `Agenda Saude - ${data.Especialidade}`,
                            text: `Você tem uma consulta dia: ${moment(data.DataAgendamento).format('l')} - ${this.convertTime(data.HorarioParaPacienteChegar)} hr`,
                            at: date
                        });  
                    } else {
                        let dayMinute = moment(data.DataAgendamento,'YYYY/MM/DD').subtract(30, 'minutes');
                        let date = new Date(dayMinute.toDate());
                        idCont++;
                        this.localNotifications.schedule({
                            id: idCont,
                            icon: './www/assets/img/icon_app.png',
                            title: `Agenda Saude - ${data.Especialidade}`,
                            text: `Você tem uma consulta em 30 Minutos`,
                            at: date
                        });
                        return;
                    }
                    cont = cont - 2;
                }
                
            } else {
                let cont = 10;
                for (cont; cont > 0;) {
                    let dayNotify = dayActual.add(2,'days');
                    if (dayNotify.diff(data.DataAgendamento, 'days') < 0) {
                        idCont++;    
                        let date = new Date(dayNotify.toDate());
                        this.localNotifications.schedule({
                            id: idCont,
                            icon: './www/assets/img/icon_app.png',
                            title: `Agenda Saude - ${data.Especialidade}`,
                            text: `Você tem uma consulta dia: ${moment(data.DataAgendamento).format('l')} - ${this.convertTime(data.HorarioParaPacienteChegar)} hr`,
                            at: date
                        });    
                    } else {
                        let dayMinute = moment(data.DataAgendamento,'YYYY/MM/DD').subtract(30, 'minutes');
                        idCont++;
                        let date = new Date(dayMinute.toDate());
                        this.localNotifications.schedule({
                            id: idCont,
                            icon: './www/assets/img/icon_app.png',
                            title: `Agenda Saude - ${data.Especialidade}`,
                            text: `Você tem uma consulta em 30 Minutos`,
                            at: date
                        });
                    }
                    cont = cont - 2;
                }
            }

        });
    }
}