import { ObtenerTagsCandidatosService } from '../servicios/obtener-tags-candidatos.service';
import { Data } from '../clases/data';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario-info-pagina',
  templateUrl: './formulario-info-pagina.component.html',
  styleUrls: ['./formulario-info-pagina.component.css']
})

export class FormularioInfoPaginaComponent implements OnInit {

  validarOperacion = true;
  solicitudCompacta: string;
  solicitud: object;
  public persondata = [];

  formularioPrincipal = new FormGroup({
    nombreWeb: new FormControl(''),
    nombreEtiqueta: new FormControl(''),
    identificador: new FormControl(''),
    palabra: new FormControl('')
  });

  constructor(public miServicio: ObtenerTagsCandidatosService) {
  }

  ngOnInit() {
  }

  enviarFormulario() {
    this.solicitud = { nombreWeb: this.formularioPrincipal.get('nombreWeb').value,
      nombreEtiqueta: this.formularioPrincipal.get('nombreEtiqueta').value,
      identificador: this.formularioPrincipal.get('identificador').value,
      palabra: this.formularioPrincipal.get('palabra').value
    };

    console.log('click');
    this.miServicio.obtenerData( JSON.stringify(this.solicitud) ).subscribe((data) => {
      this.persondata = Array.from(Object.keys(data), k => data[k]);
      console.log(this.persondata);
    });

    // console.log( this.miServicio.obtenerData(JSON.stringify(this.solicitud)) );
    /*
    this.miServicio.obtenerData(JSON.stringify(this.solicitud)).subscribe( elemento => {
      this.datos = elemento;
    });
    */
  }
}
