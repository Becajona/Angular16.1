import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoProductosComponent } from './productos.videojuegos/catalogo-productos/catalogo-productos.component';
import { NuevoProductoComponent } from './productos.videojuegos/nuevo-producto/nuevo-producto.component';
import { BuscarProductosComponent } from './productos.videojuegos/buscar-productos/buscar-productos.component';
import { ProveedoresModule } from './proveedores/proveedores.module';
import { ProductosvideojuegosModule } from './productosvideojuegos/productosvideojuegos.module';


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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
