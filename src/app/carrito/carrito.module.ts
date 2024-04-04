import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EliminarCarritoComponent } from './eliminar-carrito/eliminar-carrito.component';
import { ActualizarCarritoComponent } from './actualizar-carrito/actualizar-carrito.component';
import { CatalogoCarritoComponent } from './catalogo-carrito/catalogo-carrito.component';
import { NuevoCarritoComponent } from './nuevo-carrito/nuevo-carrito.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importa FormsModule y ReactiveFormsModule aquí
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    EliminarCarritoComponent,
    ActualizarCarritoComponent,
    CatalogoCarritoComponent,
    NuevoCarritoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
   
  ]
})
export class CarritoModule { }
