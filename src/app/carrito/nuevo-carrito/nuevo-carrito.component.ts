import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarritoService } from 'src/app/servicios/carrito.service';

@Component({
  selector: 'app-nuevo-carrito',
  templateUrl: './nuevo-carrito.component.html',
  styleUrls: ['./nuevo-carrito.component.css']
})
export class NuevoCarritoComponent implements OnInit {
  productos: any[] = [];
  clientes: any[] = [];
  selectedClienteId: string = '';
  fechaCompra: Date = new Date();
  selectedProducto: string = ''; // Define la variable para el producto seleccionado
  selectedProductos: any[] = [];

  carritoForm: FormGroup;

  constructor(private fb: FormBuilder,
    private carritoService: CarritoService,
    private router: Router) {
    this.carritoForm = this.fb.group({
      producto: ['', Validators.required],
      fechaCompra: ['', Validators.required],
      clienteId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.obtenerProductosClientes();
  
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

  crearCarrito(): void {
    const nuevoCarrito = {
      ListaProductos: this.selectedProductos,
      Fechacompra: this.fechaCompra,
      cliente_id: this.selectedClienteId
    };

    console.log('Datos que se enviarán al backend:', nuevoCarrito);

    this.carritoService.agregarNuevoCarrito(nuevoCarrito).subscribe(
      (response: any) => {
        console.log(response);
        this.router.navigate(['/catalogocarrito']);
      },
      (error: any) => {
        console.error(error);
        if (error && error.error && error.error.error) {
          alert(error.error.error);
        } else {
          alert("Ocurrió un error al crear el carrito. Por favor, inténtelo de nuevo.");
        }
      }
    );
  }
}
