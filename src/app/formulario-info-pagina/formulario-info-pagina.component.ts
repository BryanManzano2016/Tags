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
  formularioPrincipal: FormGroup;
  mensaje = '';

  constructor( private servicioGeneradorTags: ObtenerTagsCandidatosService,
               private servicioVariables: VariablesCompartidasService ) {
      this.servicioVariables.listaCandidatosActual.subscribe(e => this.data = e);
      this.servicioVariables.validarOperacionActual.subscribe(e => this.validarEnvio = e);
      this.servicioVariables.solicitudActual.subscribe(e => this.solicitudEnvio = e);
      this.servicioVariables.cambiarValidar([true]);

      this.asignarFormulario();
   }

  ngOnInit() { }

  enviarFormulario() {

    this.llenarSolicitud();

    this.servicioGeneradorTags.obtenerData(this.solicitud);
    this.mensaje = 'Procesando datos...';

    setTimeout(() => {

      this.data = this.servicioGeneradorTags.dataReturn;

      if (this.data !== undefined) {

        if (this.data.length > 0) {
          this.pasarPagina();
          this.mensaje = '';
          this.servicioGeneradorTags.dataReturn = [];
        } else {
          this.mensaje = 'Datos incorrectos o servidor fuera de servicio';
        }

      }
    }, 3000);
  }

  asignarFormulario() {
    this.formularioPrincipal = new FormGroup({
      nombreWeb: new FormControl(''),
      nombreEtiqueta: new FormControl(''),
      palabra: new FormControl('')
    });
  }

  llenarSolicitud() {
    this.solicitud = new Solicitud ( this.formularioPrincipal.get('nombreWeb').value,
      this.formularioPrincipal.get('nombreEtiqueta').value,
      this.formularioPrincipal.get('palabra').value,
      []
    );
  }

  reiniciarFormulario() {
    this.formularioPrincipal.patchValue({nombreWeb: ''});
    this.formularioPrincipal.patchValue({nombreEtiqueta: ''});
    this.formularioPrincipal.patchValue({palabra: ''});
  }

  pasarPagina() {
    this.servicioVariables.ingresarCandidatos(this.data);
    this.servicioVariables.cambiarSolicitud([this.solicitud]);
    this.servicioVariables.cambiarValidar([false]);
    this.solicitud = null;
    this.reiniciarFormulario();
  }
}
