import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { FormularioInfoPaginaComponent } from './formulario-info-pagina/formulario-info-pagina.component';
import { ListadoResultadosComponent } from './listado-resultados/listado-resultados.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormularioInfoPaginaComponent,
    ListadoResultadosComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule, ReactiveFormsModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
