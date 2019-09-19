import { ObtenerTagsCandidatosService } from '../servicios/obtener-tags-candidatos.service';
import { VariablesCompartidasService } from '../servicios/variables-compartidas.service';

import { Data } from '../clases/data';
import { Solicitud } from '../clases/solicitud';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario-info-pagina',
  templateUrl: './formulario-info-pagina.component.html',
  styleUrls: ['./formulario-info-pagina.component.sass']
})

export class FormularioInfoPaginaComponent implements OnInit {

  solicitud: Solicitud;
  data: Data[];
  validarEnvio = [];
  solicitudEnvio: object[];

  formularioPrincipal = new FormGroup({
    nombreWeb: new FormControl(''),
    nombreEtiqueta: new FormControl(''),
    identificador: new FormControl(''),
    palabra: new FormControl('')
  });

  constructor( private servicioGeneradorTags: ObtenerTagsCandidatosService,
               private servicioVariables: VariablesCompartidasService ) {
      this.servicioVariables.listaCandidatosActual.subscribe(e => this.data = e);
      this.servicioVariables.validarOperacionActual.subscribe(e => this.validarEnvio = e);
      this.servicioVariables.solicitudActual.subscribe(e => this.solicitudEnvio = e);
      this.servicioVariables.cambiarValidar([true]);
   }

  ngOnInit() { }

  enviarFormulario() {

    this.solicitud = new Solicitud ( this.formularioPrincipal.get('nombreWeb').value,
      this.formularioPrincipal.get('nombreEtiqueta').value,
      this.formularioPrincipal.get('identificador').value,
      this.formularioPrincipal.get('palabra').value,
      []
    );

    // this.servicioGeneradorTags.obtenerData(this.solicitud);

    const HEROES: Data[] = [
      { etiqueta: 'p', elemento: 'Dr Nice' },
      { etiqueta: 'p', elemento: 'Dr Nice 2' },
      { etiqueta: 'p', elemento: 'Dr Nice 3' }
    ];

    this.data = HEROES;
    this.servicioVariables.ingresarCandidatos(this.data);
    this.servicioVariables.cambiarSolicitud([this.solicitud]);
    this.servicioVariables.cambiarValidar([false]);
  /*
    setTimeout(() => {
      this.data = this.servicioGeneradorTags.dataReturn;
      this.servicioVariables.ingresarCandidatos(this.data);
    }, 3000);
  */
  }
}
