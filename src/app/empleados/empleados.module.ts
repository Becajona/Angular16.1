import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importa FormsModule y ReactiveFormsModule aquí
import { RouterModule } from '@angular/router';

import { EliminarEmpleadoComponent } from './eliminar-empleado/eliminar-empleado.component';
import { ActualizarEmpleadoComponent } from './actualizar-empleado/actualizar-empleado.component';
import { CatalogoEmpleadoComponent } from './catalogo-empleado/catalogo-empleado.component';
import { NuevoEmpleadoComponent } from './nuevo-empleado/nuevo-empleado.component';



@NgModule({
  declarations: [
    CatalogoEmpleadoComponent,
    NuevoEmpleadoComponent,
    EliminarEmpleadoComponent,
    ActualizarEmpleadoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ]
})
export class EmpleadosModule { }
