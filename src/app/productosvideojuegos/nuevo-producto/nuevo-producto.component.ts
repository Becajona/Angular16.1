import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VideoJuegosService } from 'src/app/servicios/video-juegos.service';
import { ProveedoresService } from 'src/app/servicios/proveedores.service';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {
  productosForms: FormGroup;
  miProd: any;
  imagen1: any;
  proveedores: any[] = [];

  constructor(
    private fb: FormBuilder,
    private videoJuegosService: VideoJuegosService,
    private proveedoresService: ProveedoresService,
    private router: Router
  ) {
    this.productosForms = this.fb.group({
      nombre: ['', Validators.required],
      categoria: ['', Validators.required],
      marcasId: ['', Validators.required],
      version: ['', Validators.required],
      idiomas: ['', Validators.required],
      jugadores: [0, Validators.required],
      descripcion: ['', Validators.required],
      costo: [0, Validators.required],
      precio: [0, Validators.required],
      foto: ['', Validators.required],
      cantidadExistente: [0, Validators.required],
      estado: ['', Validators.required],
      origen: ['', Validators.required],
      provId: ['', Validators.required] // Campo para el proveedor
    });
  }

  ngOnInit() {
    this.miProd = {
      nombre: '',
      categoria: '',
      marcasId: '',
      version: '',
      idiomas: '',
      jugadores: 0,
      descripcion: '',
      costo: 0,
      precio: 0,
      foto: '',
      cantidadExistente: 0,
      estado: '',
      origen: '',
      provId: ''
    };
    this.obtenerProveedores();
  }

  obtenerProveedores() {
    this.proveedoresService.obtenerTodosLosProveedores().subscribe(
      (data: any[]) => {
        this.proveedores = data;
      },
      error => {
        console.error('Error al obtener los proveedores:', error);
      }
    );
  }

  agregarProducto() {
    if (this.productosForms.valid) {
      const producto = this.productosForms.value;
  
      // Verificar que el control 'provId' existe y no es null
      const provIdControl = this.productosForms.get('provId');
      if (provIdControl) {
        // Asignar el valor del control 'provId' al producto
        producto.provId = provIdControl.value;
  
        this.videoJuegosService.guardarProducto(producto).subscribe(
          (data) => {
            console.log('Producto guardado correctamente:', data);
            this.router.navigate(['/']); // Navegar a la página principal después de guardar el producto
          },
          (error) => {
            console.error('Error al guardar el producto:', error);
            this.productosForms.reset(); // Restablecer el formulario si hay un error
          }
        );
      } else {
        console.error('El control provId no existe en el formulario.');
      }
    } else {
      console.error('El formulario es inválido.');
    }
  }

  onSubmit() {
    if (this.productosForms.valid) {
      const producto = this.productosForms.value;
      console.log('Producto a enviar:', producto);
      this.videoJuegosService.guardarProducto(producto).subscribe(response => {
        console.log('Producto agregado:', response);
        // Realiza cualquier otra acción necesaria después de agregar el producto
      });
    } else {
      console.error('El formulario es inválido.');
    }
  }

  convertir_B64(event: any) {
    if (event.target.files && event.target.files[0]) {
      var file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.imagen1 = reader.result;
      reader.readAsDataURL(file);
    }
  }
}
