import { Component, OnInit } from '@angular/core';

import { VariablesCompartidasService } from '../servicios/variables-compartidas.service';
import { ProcesarTagsService } from '../servicios/procesar-tags.service';

import { Data } from '../clases/data';
import { Solicitud } from '../clases/solicitud';

@Component({
  selector: 'app-listado-resultados',
  templateUrl: './listado-resultados.component.html',
  styleUrls: ['./listado-resultados.component.sass']
})
export class ListadoResultadosComponent implements OnInit {

  data: Data[];
  dataEnviar: string[];
  solicitudEnvio: Solicitud[];
  validarEnvio = [];
  mensaje = '';

  constructor(private servicioVariables: VariablesCompartidasService,
              private servicioGuardar: ProcesarTagsService) {
    this.servicioVariables.listaCandidatosActual.subscribe(e => this.data = e);
    this.servicioVariables.validarOperacionActual.subscribe(e => this.validarEnvio = e);
    this.servicioVariables.solicitudActual.subscribe(e => this.solicitudEnvio = e);
  }

  ngOnInit() {}

  seleccionItems() {
    const lista = (document.getElementById('seleccion') as HTMLSelectElement);
    this.dataEnviar = this.servicioGuardar.obtenerSeleccion(lista);
  }

  enviarElementos() {

    this.solicitudEnvio[0].elementos = this.dataEnviar;

    if (this.dataEnviar !== undefined && this.solicitudEnvio[0].elementos.length > 0) {
      if (this.servicioGuardar.enviarSeleccion(this.solicitudEnvio[0])) {
        this.mensaje = 'Envio exitoso';
        setTimeout(() => {
          this.atras();
        }, 5000);
      } else {
        this.mensaje = 'Servidor inabilitado';
      }
    } else {
      this.mensaje = 'Nada que enviar';
    }

  }

  vaciarListas() {
    this.data = [];
    this.dataEnviar = [];
  }

  atras() {
    this.vaciarListas();
    this.servicioVariables.cambiarValidar([true]);
    this.mensaje = '';
  }
}
