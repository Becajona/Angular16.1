import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/servicios/carrito.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

import { VideoJuegosService } from 'src/app/servicios/video-juegos.service';
import { VideoJuego } from '../../modelos/video-juegos/apis-jon.interface';


@Component({
  selector: 'app-catalogo-carrito',
  templateUrl: './catalogo-carrito.component.html',
  styleUrls: ['./catalogo-carrito.component.css']
})
export class CatalogoCarritoComponent implements OnInit {
  private apiUrl = 'http://192.168.1.72:4000/api/v1/productos';
  private apiUrl2 = 'http://192.168.1.72:4000/api/v1/cliente';
  productos: any[] = [];
  clientes: any[] = [];
  carritos: any[] = [];
  selectedProducto: string = ''; // Definición de la propiedad selectedProducto
  selectedClienteId: string = ''; 
  fechaCompra: Date = new Date(); 
 

  constructor(private carritoService: CarritoService,private http: HttpClient ) { }

  ngOnInit(): void {
    this.obtenerProductosClientes();
    this.obtenerCarritos();
    this.obtenerTodosLosProductos();
    this.obtenerTodosLosClientes();
  }

  obtenerProductosClientes(): void {
    this.carritoService.getProductosClientes()
    .subscribe(
      response => {
        this.productos = response.productos; // Asigna la lista de productos
        this.clientes = response.clientes; // Asigna la lista de clientes
      },
      error => {
        console.error(error); // Manejo de errores
      }
    );
  } 
  obtenerCarritos(): void {
    this.carritoService.getCarritos()
      .subscribe(
        response => {
          this.carritos = response;
        },
        error => {
          console.error(error);
        }
      );
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

  obtenerNombreProducto(idProducto: string): string {
    const producto = this.productos.find(p => p._id === idProducto);
    return producto ? producto.nombre : 'Productos';
  }

  obtenerNombreCliente(idCliente: string): string {
    const cliente = this.clientes.find(c => c._id === idCliente);
    return cliente ? cliente.nombre : 'Desconocido';
  }

}
