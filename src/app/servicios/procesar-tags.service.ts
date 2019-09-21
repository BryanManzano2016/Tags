import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';

import { Solicitud } from '../clases/solicitud';

@Injectable({
  providedIn: 'root'
})
export class ProcesarTagsService {

  constructor(private http: HttpClient) { }

  obtenerSeleccion(seleccion: HTMLSelectElement): string[] {
    let data = [];
    const lista = seleccion.selectedOptions;
    for (let i = 0; i < lista.length; i++) {
      data.push(lista.item(i).value);
    }

    return data;
  }

  enviarSeleccion(solicitud: Solicitud): boolean {

    let respuesta: string;
    const httpOptions = { params: new HttpParams().set('solicitud',
      JSON.stringify(solicitud)) };
    this.http.post('http://localhost:9000/guardarEnlaces', httpOptions).
      toPromise().then( (data: any) => {  respuesta = data; }
      );
    if (respuesta !== '0') {
      return true;
    }
    return false;

  }
}
