import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevoProovedorComponent } from './nuevo-proovedor/nuevo-proovedor.component';
import { CatalogoProveedorComponent } from './catalogo-proveedor/catalogo-proveedor.component';



@NgModule({
  declarations: [
    NuevoProovedorComponent,
    CatalogoProveedorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProveedoresModule { }
