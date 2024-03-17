import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importa FormsModule y ReactiveFormsModule aquí
import { RouterModule } from '@angular/router';

import { CatalogoProveedorComponent } from './catalogo-proveedor/catalogo-proveedor.component';
import { NuevoProveedorComponent } from './nuevo-proovedor/nuevo-proovedor.component'; // Importa el componente NuevoProveedorComponent
import { EliminarProovedorComponent } from './eliminar-proovedor/eliminar-proovedor.component';
import { ActualizarProovedorComponent } from './actualizar-proovedor/actualizar-proovedor.component';


@NgModule({
  declarations: [
    CatalogoProveedorComponent,
    NuevoProveedorComponent, // Agrega el componente NuevoProveedorComponent aquí
    EliminarProovedorComponent,
    ActualizarProovedorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    NuevoProveedorComponent
  ]
})
export class ProveedoresModule { }
