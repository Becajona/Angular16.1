import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductosvideojuegosModule } from './productosvideojuegos/productosvideojuegos.module';
import { LoginComponent } from './navegacion/login/login.component';
import { CrearCuentaComponent } from './navegacion/crear-cuenta/crear-cuenta.component';
//Departamentos
import { CatalogoDepartamentosComponent } from './departamentos/catalogo-departamentos/catalogo-departamentos.component';
import { ActualizarDepartamentosComponent } from './departamentos/actualizar-departamentos/actualizar-departamentos.component';
import { NuevoDepartamentosComponent } from './departamentos/nuevo-departamentos/nuevo-departamentos.component';
import { EliminarDepartamentoComponent } from './departamentos/eliminar-departamentos/eliminar-departamentos.component';

//Clientes
import { CatalogoClientesComponent } from './clientes/catalogo-clientes/catalogo-clientes.component';
import { EliminarClientesComponent } from './clientes/eliminar-clientes/eliminar-clientes.component';
import { ActualizarClientesComponent } from './clientes/actualizar-clientes/actualizar-clientes.component';
import { NuevoClientesComponent } from './clientes/nuevo-clientes/nuevo-clientes.component';

//Carrito
import { CatalogoCarritoComponent } from './carrito/catalogo-carrito/catalogo-carrito.component';
import { EliminarCarritoComponent } from './carrito/eliminar-carrito/eliminar-carrito.component';
import { ActualizarCarritoComponent } from './carrito/actualizar-carrito/actualizar-carrito.component';
import { NuevoCarritoComponent } from './carrito/nuevo-carrito/nuevo-carrito.component';


import { VideoJuegosService } from './servicios/video-juegos.service';

//marcas
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


//Empleados
import { NuevoEmpleadoComponent } from './empleados/nuevo-empleado/nuevo-empleado.component';
import { ActualizarEmpleadoComponent } from './empleados/actualizar-empleado/actualizar-empleado.component';
import { EliminarEmpleadoComponent } from './empleados/eliminar-empleado/eliminar-empleado.component';
import { CatalogoEmpleadoComponent } from './empleados/catalogo-empleado/catalogo-empleado.component';

//usuarios
import { UsuariosModule } from './usuarios/usuarios.module';
import { CatalogoUsuarioComponent } from './usuarios/catalogo-usuario/catalogo-usuario.component';
import { EliminarUsuarioComponent } from './usuarios/eliminar-usuario/eliminar-usuario.component';
import { ActualizarUsuarioComponent } from './usuarios/actualizar-usuario/actualizar-usuario.component';
import { NuevoUsuarioComponent } from './usuarios/nuevo-usuario/nuevo-usuario.component';


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
          path:'usuarios',
          component: UsuariosModule
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
                                {
                                  path:'catalogoempleado',
                                  component: CatalogoEmpleadoComponent
                                  },
                                  {
                                    path:'actualizarempleado/:id',
                                    component: ActualizarEmpleadoComponent
                                    },
                                    {
                                      path:'catalogousuario',
                                      component: CatalogoUsuarioComponent
                                      },
                                      {
                                        path:'nuevousuario',
                                        component: NuevoUsuarioComponent
                                        },
                                        {
                                          path:'nuevoempleado',
                                          component: NuevoEmpleadoComponent
                                          },
                                          {
                                            path:'actualizarusuario/:id',
                                            component: ActualizarUsuarioComponent
                                            },
                                            {
                                              path:'eliminarusuario/:id',
                                              component: EliminarUsuarioComponent
                                              },
                                              {
                                                path:'eliminarempleado/:id',
                                                component: EliminarEmpleadoComponent
                                                },
                                            //Departamentos
                                                {
                                                  path:'eliminardepartamentos/:id',
                                                  component: EliminarDepartamentoComponent
                                                  },
                                                  {
                                                    path:'actualizardepartamentos/:id',
                                                    component: ActualizarDepartamentosComponent
                                                    },
                                                    {
                                                      path:'catalogodepartamentos',
                                                      component: CatalogoDepartamentosComponent
                                                      },
                                                      {
                                                        path:'nuevodepartamentos',
                                                        component: NuevoDepartamentosComponent
                                                        },
                                                 //Clientes
                                                        {
                                                          path:'eliminarclientes/:id',
                                                          component: EliminarClientesComponent
                                                          },
                                                          {
                                                            path:'actualizarclientes/:id',
                                                            component: ActualizarClientesComponent
                                                            },
                                                            {
                                                              path:'catalogoclientes',
                                                              component: CatalogoClientesComponent
                                                              },
                                                              {
                                                                path:'nuevoclientes',
                                                                component: NuevoClientesComponent
                                                                },
                                                        //Carrito
                                                                {
                                                                  path:'eliminarcarrito/:id',
                                                                  component: EliminarCarritoComponent
                                                                  },
                                                                  {
                                                                    path:'actualizarcarrito/:id',
                                                                    component: ActualizarCarritoComponent
                                                                    },
                                                                    {
                                                                      path:'catalogocarrito',
                                                                      component: CatalogoCarritoComponent
                                                                      },
                                                                      {
                                                                        path:'nuevocarrito',
                                                                        component: NuevoCarritoComponent
                                                                        },
                                
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
