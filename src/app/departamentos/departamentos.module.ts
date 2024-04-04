import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActualizarDepartamentosComponent } from './actualizar-departamentos/actualizar-departamentos.component';
import { NuevoDepartamentosComponent } from './nuevo-departamentos/nuevo-departamentos.component';
import { CatalogoDepartamentosComponent } from './catalogo-departamentos/catalogo-departamentos.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importa FormsModule y ReactiveFormsModule aquí



@NgModule({
  declarations: [
    ActualizarDepartamentosComponent,
    NuevoDepartamentosComponent,
    CatalogoDepartamentosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],

  exports: [
    
  ]

})
export class DepartamentosModule { }
