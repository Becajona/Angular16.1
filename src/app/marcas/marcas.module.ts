import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevaMarcaComponent } from './nueva-marca/nueva-marca.component';
import { CatalogoMarcasComponent } from './catalogo-marcas/catalogo-marcas.component';



@NgModule({
  declarations: [
    NuevaMarcaComponent,
    CatalogoMarcasComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MarcasModule { }
