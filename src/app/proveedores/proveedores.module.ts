import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevoProovedorComponent } from './nuevo-proovedor/nuevo-proovedor.component';
import { CatalogoProveedorComponent } from './catalogo-proveedor/catalogo-proveedor.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EliminarProovedorComponent } from './eliminar-proovedor/eliminar-proovedor.component';
import { ActualizarProovedorComponent } from './actualizar-proovedor/actualizar-proovedor.component';


@NgModule({
  declarations: [
    NuevoProovedorComponent,
    CatalogoProveedorComponent,
    EliminarProovedorComponent,
    ActualizarProovedorComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class ProveedoresModule { }
