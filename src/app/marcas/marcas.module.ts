import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevaMarcaComponent } from './nueva-marca/nueva-marca.component';
import { CatalogoMarcasComponent } from './catalogo-marcas/catalogo-marcas.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EliminarComponent } from './eliminar/eliminar.component';
import { EliminarMarcaComponent } from './eliminar-marca/eliminar-marca.component';



@NgModule({
  declarations: [
    NuevaMarcaComponent,
    CatalogoMarcasComponent,
    EliminarComponent,
    EliminarMarcaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class MarcasModule { }
