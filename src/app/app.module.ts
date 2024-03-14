import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavegacionModule } from './navegacion/navegacion.module';
import { ProductosvideojuegosModule }  from './productosvideojuegos/productosvideojuegos.module';
import { ProveedoresModule } from './proveedores/proveedores.module';
import { CatalogoProductosComponent } from './productos.videojuegos/catalogo-productos/catalogo-productos.component';
import { NuevoProductoComponent } from './productos.videojuegos/nuevo-producto/nuevo-producto.component';
import { BuscarProductosComponent } from './productos.videojuegos/buscar-productos/buscar-productos.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    CatalogoProductosComponent,
    NuevoProductoComponent,
    BuscarProductosComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavegacionModule,
    ProductosvideojuegosModule,
    ProveedoresModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
