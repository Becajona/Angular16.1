import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { CatalogoUsuarioComponent } from './catalogo-usuario/catalogo-usuario.component';
import { ActualizarUsuarioComponent } from './actualizar-usuario/actualizar-usuario.component';
import { EliminarUsuarioComponent } from './eliminar-usuario/eliminar-usuario.component';



@NgModule({
  declarations: [
    NuevoUsuarioComponent,
    CatalogoUsuarioComponent,
    ActualizarUsuarioComponent,
    EliminarUsuarioComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsuariosModule { }
