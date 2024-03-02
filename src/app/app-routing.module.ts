import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoProductosComponent } from './productos.videojuegos/catalogo-productos/catalogo-productos.component';
import { NuevoProductoComponent } from './productos.videojuegos/nuevo-producto/nuevo-producto.component';
import { BuscarProductosComponent } from './productos.videojuegos/buscar-productos/buscar-productos.component';
import { ProveedoresModule } from './proveedores/proveedores.module';
import { ProductosvideojuegosModule } from './productosvideojuegos/productosvideojuegos.module';
import { LoginComponent } from './navegacion/login/login.component';
import { CrearCuentaComponent } from './navegacion/crear-cuenta/crear-cuenta.component';
import { NuevoProovedorComponent } from './proveedores/nuevo-proovedor/nuevo-proovedor.component';
import { NuevaMarcaComponent } from './marcas/nueva-marca/nueva-marca.component';


const routes: Routes = [
  {
  path:'productosCatalogo',
  component: CatalogoProductosComponent
  },
  {
    path:'nuevoProducto',
    component: NuevoProductoComponent
    },
    {
      path:'buscarProducto',
      component: BuscarProductosComponent
      },
      {
        path:'proveedor',
        component: ProveedoresModule
        },
        {
          path:'login',
          component: LoginComponent
          },
          {
            path:'crearCuenta',
            component: CrearCuentaComponent
            },
            {
              path:'nuevoProveedor',
              component: NuevoProovedorComponent
              },
              {
                path:'nuevaMarca',
                component: NuevaMarcaComponent
                },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
