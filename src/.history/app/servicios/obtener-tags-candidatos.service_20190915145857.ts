import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {HttpParams} from '@angular/common/http';
import { Data } from '../clases/data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObtenerTagsCandidatosService {

  private apiurl = 'http://localhost:9000/';

  constructor(private http: HttpClient) { }

  obtenerData(solicitudEnJson: string) {
    console.log('servicio');
    return this.http.get('http://localhost:9000');
  }

}
