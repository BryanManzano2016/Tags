import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
// import {HttpParams} from '@angular/common/http';
// import { Data } from '../clases/data';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObtenerTagsCandidatosService {

  constructor(public http: HttpClient) { }

  obtenerData(solicitudEnJson: string) {

    const requestOptions = new HttpRequest( {withCredentials: true} );

    console.log('servicio');
    return this.http.get('http://localhost:9000', requestOptions);
  }

}
