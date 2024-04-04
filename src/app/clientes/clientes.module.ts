import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EliminarClientesComponent } from './eliminar-clientes/eliminar-clientes.component';
import { ActualizarClientesComponent } from './actualizar-clientes/actualizar-clientes.component';
import { CatalogoClientesComponent } from './catalogo-clientes/catalogo-clientes.component';
import { NuevoClientesComponent } from './nuevo-clientes/nuevo-clientes.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importa FormsModule y ReactiveFormsModule aquí


@NgModule({
  declarations: [
    EliminarClientesComponent,
    ActualizarClientesComponent,
    CatalogoClientesComponent,
    NuevoClientesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ]
})
export class ClientesModule { }
