import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscarProductosComponent } from './buscar-productos/buscar-productos.component';
import { NuevoProductoComponent } from './nuevo-producto/nuevo-producto.component';
import { CatalogoProductosComponent } from './catalogo-productos/catalogo-productos.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EliminarComponent } from './eliminar/eliminar.component';
import { ActualizarProductoComponent } from './actualizar-producto/actualizar-producto.component';





@NgModule({
  declarations: [
    BuscarProductosComponent,
    NuevoProductoComponent,
    CatalogoProductosComponent,
    EliminarComponent,
    ActualizarProductoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule // Asegúrate de importar RouterModule aquí
  ]
})
export class ProductosvideojuegosModule { }
