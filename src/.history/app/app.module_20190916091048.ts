import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormularioInfoPaginaComponent } from './formulario-info-pagina/formulario-info-pagina.component';
import { ListadoResultadosComponent } from './listado-resultados/listado-resultados.component';

import { ReactiveFormsModule } from '@angular/forms';

// Servicios
import { ObtenerTagsCandidatosService } from './servicios/obtener-tags-candidatos.service';


@NgModule({
  declarations: [
    AppComponent,
    FormularioInfoPaginaComponent,
    ListadoResultadosComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, ReactiveFormsModule
  ],
  providers: [ObtenerTagsCandidatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
