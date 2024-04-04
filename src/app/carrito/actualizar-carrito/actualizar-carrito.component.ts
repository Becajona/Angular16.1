  // actualizar-carrito.component.ts
  import { ActivatedRoute, Router } from '@angular/router';
  import { CarritoService } from 'src/app/servicios/carrito.service';
  import { Component, OnInit } from '@angular/core';
  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { catchError, tap } from 'rxjs/operators';
  import { Observable, of, throwError } from 'rxjs';

  @Component({
    selector: 'app-actualizar-carrito',
    templateUrl: './actualizar-carrito.component.html',
    styleUrls: ['./actualizar-carrito.component.css']
  })
  export class ActualizarCarritoComponent implements OnInit {
    private apiUrl = 'http://192.168.1.72:4000/api/v1/productos';
    private apiUrl2 = 'http://192.168.1.72:4000/api/v1/cliente';
    carritoId!: string;
    carrito: any = {};
    clientes: any[] = [];
    selectedProductos: any[] = [];
    selectedClienteId: string = '';
    productos: any[] = [];
    selectedProducto: string = ''; // Define la variable para el producto seleccionado

    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private carritoService: CarritoService,
      private http: HttpClient // Inyecta HttpClient aquí
    ) { }

    ngOnInit(): void {
      this.carritoId = this.route.snapshot.paramMap.get('id')!;
      this.obtenerCarrito();
      this.obtenerTodosLosProductos();
      this.obtenerProductosClientes();
    }

    obtenerCarrito(): void {
      this.carritoService.getCarritoById(this.carritoId)
        .subscribe(
          (data) => {
            this.carrito = data;
          },
          (error) => {
            console.error(error);
          }
        );
    }

    actualizarCarrito(): void {
      this.carritoService.actualizarCarrito(this.carritoId, this.carrito)
        .subscribe(
          () => {
            console.log('Carrito actualizado correctamente');
            alert("Carrito actualizado correctamente");
            this.router.navigate(['/catalogocarrito']);
          },
          (error) => {
            console.error('Error al actualizar el carrito:', error);
          }
        );
    }

    cancelar(): void {
      // Puedes implementar la lógica de cancelación aquí si es necesario
    }

  obtenerTodosLosProductos(): Observable<any[]> {
    const url = `${this.apiUrl}/get_all`;
    return this.http.get<any[]>(url).pipe(
      tap(data => console.log('Datos obtenidos del servidor:', data)),
      catchError(err => {
        console.error('Error al obtener los datos del servidor:', err);
        return throwError(err);
      })
    );
  }
  obtenerTodosLosClientes(): Observable<any[]> {
    const url = `${this.apiUrl2}/get_all`;
    return this.http.get<any[]>(url).pipe(
      tap(data => console.log('Datos obtenidos del servidor:', data)),
      catchError(err => {
        console.error('Error al obtener los datos del servidor:', err);
        return throwError(err);
      })
    );
  }

  obtenerProductosClientes(): void {
    this.carritoService.getProductosClientes().subscribe(
      (response: any) => {
        this.productos = response.productos;
        this.clientes = response.clientes;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  agregarProducto(event: any): void { // Cambia la función para recibir el evento de cambio
    const productoId = event.target.value; // Obtiene el valor seleccionado del evento
    const producto = this.productos.find((p: any) => p._id === productoId);
    if (producto) {
        this.selectedProductos.push(producto);
    }
  }

  eliminarProducto(index: number): void {
    this.selectedProductos.splice(index, 1);
  }

  }
