import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {RequestOptions, Request, Headers } from '@angular/http';
// import {HttpParams} from '@angular/common/http';
// import { Data } from '../clases/data';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObtenerTagsCandidatosService {

  constructor(public http: HttpClient) { }

  obtenerData(solicitudEnJson: string) {

    let requestOptions = new RequestOptions({ headers: null, withCredentials: true });

    console.log('servicio');
    return this.http.get('http://localhost:9000', requestOptions);
  }

}
