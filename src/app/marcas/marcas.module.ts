import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importa FormsModule y ReactiveFormsModule aquí
import { RouterModule } from '@angular/router';

import { CatalogoMarcasComponent } from './catalogo-marcas/catalogo-marcas.component';
import { NuevaMarcaComponent } from './nueva-marca/nueva-marca.component';
import { EliminarMarcaComponent } from './eliminar-marca/eliminar-marca.component';
import { ActualizarMarcaComponent } from './actualizar-marca/actualizar-marca.component';
//Falta import { ActualizarProovedorComponent } from './actualizar-proovedor/actualizar-proovedor.component';


@NgModule({
  declarations: [
    CatalogoMarcasComponent,
    NuevaMarcaComponent,
    EliminarMarcaComponent,
    ActualizarMarcaComponent,



  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    NuevaMarcaComponent
  ]
})
export class MarcasModule { }
