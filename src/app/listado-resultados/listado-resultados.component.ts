import { Component, OnInit, Input } from '@angular/core';
import { VariablesCompartidasService } from '../servicios/variables-compartidas.service';
import { Data } from '../clases/data';

@Component({
  selector: 'app-listado-resultados',
  templateUrl: './listado-resultados.component.html',
  styleUrls: ['./listado-resultados.component.sass']
})
export class ListadoResultadosComponent implements OnInit {

  data: Data[];
  validarOperacion: boolean;

  constructor(private servicioVariables: VariablesCompartidasService ) {
    this.servicioVariables.listaCandidatosActual.subscribe(e => this.data = e);
  }

  ngOnInit() {}
}
