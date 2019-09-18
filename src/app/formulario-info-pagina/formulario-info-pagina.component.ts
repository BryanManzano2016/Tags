import { ObtenerTagsCandidatosService } from '../servicios/obtener-tags-candidatos.service';
import { VariablesCompartidasService } from '../servicios/variables-compartidas.service';
import { Data } from '../clases/data';

import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario-info-pagina',
  templateUrl: './formulario-info-pagina.component.html',
  styleUrls: ['./formulario-info-pagina.component.sass']
})

export class FormularioInfoPaginaComponent implements OnInit {

  solicitud: object;
  data: Data[];
  validar: boolean;

  formularioPrincipal = new FormGroup({
    nombreWeb: new FormControl(''),
    nombreEtiqueta: new FormControl(''),
    identificador: new FormControl(''),
    palabra: new FormControl('')
  });

  constructor( private servicioGeneradorTags: ObtenerTagsCandidatosService,
               private servicioVariables: VariablesCompartidasService ) {
      this.servicioVariables.listaCandidatosActual.subscribe(e => this.data = e);
   }

  ngOnInit() {
    this.validar = false;
  }

  enviarFormulario() {

    this.solicitud = { nombreWeb: this.formularioPrincipal.get('nombreWeb').value,
      nombreEtiqueta: this.formularioPrincipal.get('nombreEtiqueta').value,
      identificador: this.formularioPrincipal.get('identificador').value,
      palabra: this.formularioPrincipal.get('palabra').value
    };

    this.servicioGeneradorTags.obtenerData(JSON.stringify(this.solicitud));

    setTimeout(() => {
      this.data = this.servicioGeneradorTags.dataReturn;
      // this.data = [ new Data() ];
      this.servicioVariables.ingresarCandidatos(this.data);
    }, 3000);

  }
}
