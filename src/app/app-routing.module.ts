import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductosvideojuegosModule } from './productosvideojuegos/productosvideojuegos.module';
import { LoginComponent } from './navegacion/login/login.component';
import { CrearCuentaComponent } from './navegacion/crear-cuenta/crear-cuenta.component';


import { VideoJuegosService } from './servicios/video-juegos.service';

//marcas
import { MarcasService } from './servicios/marcas.service';

import { CatalogoMarcasComponent } from './marcas/catalogo-marcas/catalogo-marcas.component';
import { NuevaMarcaComponent } from './marcas/nueva-marca/nueva-marca.component';
import { ActualizarMarcaComponent } from './marcas/actualizar-marca/actualizar-marca.component';


//Prooveedores

import { ProveedoresModule } from './proveedores/proveedores.module';
import { NuevoProveedorComponent } from './proveedores/nuevo-proovedor/nuevo-proovedor.component';

import { CatalogoProveedorComponent } from './proveedores/catalogo-proveedor/catalogo-proveedor.component';
//eliminar
import { EliminarMarcaComponent } from './marcas/eliminar-marca/eliminar-marca.component';
import { EliminarProovedorComponent } from './proveedores/eliminar-proovedor/eliminar-proovedor.component';
import { ActualizarProovedorComponent } from './proveedores/actualizar-proovedor/actualizar-proovedor.component';

//Productos videoJuegos
import { CatalogoProductosComponent } from './productosvideojuegos/catalogo-productos/catalogo-productos.component';
import { BuscarProductosComponent } from './productosvideojuegos/buscar-productos/buscar-productos.component';
import { NuevoProductoComponent } from './productosvideojuegos/nuevo-producto/nuevo-producto.component';
import { EliminarComponent } from './productosvideojuegos/eliminar/eliminar.component';
import { ActualizarProductoComponent } from './productosvideojuegos/actualizar-producto/actualizar-producto.component';


const routes: Routes = [
  {
  path:'productosCatalogos',
  component: CatalogoProductosComponent
  },
  {
    path:'productoNuevo',
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
              component: NuevoProveedorComponent
              },
              {
                path:'nuevaMarca',
                component: NuevaMarcaComponent
                },
                {
                  path:'catalogoProveedor',
                  component: CatalogoProveedorComponent
                  },
                  {
                    path:'catalogoMarcas',
                    component: CatalogoMarcasComponent
                    },
                      {
                        path:'productoseliminar/:id',
                        component:EliminarComponent
                      }, 
                        {
                          path:'actualizarproducto/:id',
                          component:ActualizarProductoComponent
                        },
                        {
                          path:'eliminarproovedor/:id',
                          component: EliminarProovedorComponent
                          },
                          {
                            path:'eliminarmarca/:id',
                            component: EliminarMarcaComponent
                            },
                            {
                              path:'actualizarproovedor/:id',
                              component: ActualizarProovedorComponent
                              },
                              {
                                path:'actualizarmarca/:id',
                                component: ActualizarMarcaComponent
                                },
                              
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
