import { Injectable } from '@angular/core';
import { Data } from '../clases/data';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VariablesCompartidasService {

  private listaCandidatos = new BehaviorSubject([]);
  listaCandidatosActual = this.listaCandidatos.asObservable();

  validarOperacion = false;

  ingresarCandidatos(data: Data[]) {
    this.listaCandidatos.next(data);
  }

  constructor() { }

  cambiarEstadoResultados() {
    this.validarOperacion = !this.validarOperacion;
  }

}
