import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EliminarComponent } from './eliminar/eliminar.component';
import { EliminarEmpleadoComponent } from './eliminar-empleado/eliminar-empleado.component';
import { ActualizarEmpleadoComponent } from './actualizar-empleado/actualizar-empleado.component';
import { CatalogoEmpleadoComponent } from './catalogo-empleado/catalogo-empleado.component';
import { NuevoEmpleadoComponent } from './nuevo-empleado/nuevo-empleado.component';



@NgModule({
  declarations: [
    EliminarComponent,
    EliminarEmpleadoComponent,
    ActualizarEmpleadoComponent,
    CatalogoEmpleadoComponent,
    NuevoEmpleadoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EmpleadosModule { }
