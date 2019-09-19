import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { Solicitud } from '../clases/solicitud';
import { Data } from '../clases/data';

@Injectable({
  providedIn: 'root'
})
export class VariablesCompartidasService {

  private listaCandidatos = new BehaviorSubject([]);
  listaCandidatosActual = this.listaCandidatos.asObservable();

  private validarOperacion = new BehaviorSubject([]);
  validarOperacionActual = this.validarOperacion.asObservable();

  private solicitud = new BehaviorSubject([]);
  solicitudActual = this.solicitud.asObservable();

  constructor() { }

  ingresarCandidatos(data: Data[]) {
    this.listaCandidatos.next(data);
  }

  cambiarValidar(data: boolean[]) {
    this.validarOperacion.next(data);
  }

  cambiarSolicitud(data: Solicitud[]) {
    this.solicitud.next(data);
  }

}
