import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { NuevoProovedorComponent } from '../proveedores/nuevo-proovedor/nuevo-proovedor.component';
import { CatalogoProductosComponent } from '../productosvideojuegos/catalogo-productos/catalogo-productos.component';


@NgModule({
  declarations: [
    MenuComponent,
    LoginComponent,
    CrearCuentaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    MenuComponent,
    LoginComponent
  ]
})
export class NavegacionModule { }
