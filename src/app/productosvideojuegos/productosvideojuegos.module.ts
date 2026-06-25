import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';
import { BuscarProductosComponent } from './buscar-productos/buscar-productos.component';
import { CatalogoProductosComponent } from './catalogo-productos/catalogo-productos.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { HttpClientModule } from '@angular/common/http';


//
import { ActualizarProductoComponent } from './actualizar-producto/actualizar-producto.component';
import { NuevoProductoComponent } from './nuevo-producto/nuevo-producto.component';


@NgModule({
  declarations: [
    BuscarProductosComponent,
    
    CatalogoProductosComponent,
    EliminarComponent,
    ActualizarProductoComponent,
    NuevoProductoComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    RouterModule, 
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ProductosvideojuegosModule { }
