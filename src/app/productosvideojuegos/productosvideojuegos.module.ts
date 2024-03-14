import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscarProductosComponent } from './buscar-productos/buscar-productos.component';
import { NuevoProductoComponent } from './nuevo-producto/nuevo-producto.component';
import { CatalogoProductosComponent } from './catalogo-productos/catalogo-productos.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    BuscarProductosComponent,
    NuevoProductoComponent,
    CatalogoProductosComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ProductosvideojuegosModule { }
