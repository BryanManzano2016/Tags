import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Data } from '../clases/data';
import { Solicitud } from '../clases/solicitud';

@Injectable({
  providedIn: 'root'
})

export class ObtenerTagsCandidatosService {

  dataReturn: Data[] = [];

  constructor(private http: HttpClient) { }

  obtenerData(solicitud: Solicitud) {

    this.dataReturn = [];

    const httpOptions = { params: new HttpParams().set('solicitud',
     JSON.stringify(solicitud)) };
    this.http.get<Data[]>('http://localhost:9000/enlaces', httpOptions).toPromise().
      then( (data: any) => { this.dataReturn = data; });

  }
}
