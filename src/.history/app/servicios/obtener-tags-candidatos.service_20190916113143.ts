import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// import { Data } from '../clases/data';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObtenerTagsCandidatosService {

  constructor(public http: HttpClient) { }

  obtenerData(solicitudEnJson: string) {

    const httpOptions = {
      headers: new HttpHeaders().set('Access-Control-Allow-Origin', '*'),
      params: new HttpParams().set('name', '{}')
    };

    new HttpHeaders().set('Access-Control-Allow-Origin', '*');

    console.log('servicio');
    return this.http.get('http://localhost:9000', httpOptions);
  }

}
