import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavegacionModule } from './navegacion/navegacion.module';
import { ProductosvideojuegosModule }  from './productosvideojuegos/productosvideojuegos.module';
import { ProveedoresModule } from './proveedores/proveedores.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavegacionModule,
    ProductosvideojuegosModule,
    ProveedoresModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
