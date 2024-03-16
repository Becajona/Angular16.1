import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule aquí
import { RouterModule } from '@angular/router';
import { BuscarProductosComponent } from './buscar-productos/buscar-productos.component';
import { NuevoProductoComponent } from './nuevo-producto/nuevo-producto.component';
import { CatalogoProductosComponent } from './catalogo-productos/catalogo-productos.component';
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
    FormsModule, // Asegúrate de importar FormsModule aquí
    RouterModule // Asegúrate de importar RouterModule aquí
  ]
})
export class ProductosvideojuegosModule { }
