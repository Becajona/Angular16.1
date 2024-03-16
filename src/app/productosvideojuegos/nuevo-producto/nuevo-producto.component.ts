import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { VideoJuegosService } from 'src/app/servicios/video-juegos.service';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {
  imagen: any;
  productosForms: FormGroup;

  constructor(private videoJuegosService: VideoJuegosService) {
    this.productosForms = new FormGroup({
      _id: new FormControl('', Validators.required),
      clave: new FormControl('', Validators.required),
      nombre: new FormControl('', Validators.required),
      categoria: new FormControl('', Validators.required),
      tipo: new FormControl('', Validators.required),
      marcasId: new FormControl('', Validators.required),
      version: new FormControl('', Validators.required),
      idiomas: new FormControl('', Validators.required),
      jugadores: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
      costo: new FormControl('', Validators.required),
      precio: new FormControl('', Validators.required),
      foto: new FormControl('', Validators.required),
      fechaAdquisicion: new FormControl('', Validators.required),
      fecharegistro: new FormControl('', Validators.required),
      cantidadExistente: new FormControl('', Validators.required),
      estado: new FormControl('', Validators.required),
      origen: new FormControl('', Validators.required),
      provId: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    // Puedes agregar lógica de inicialización si es necesario
  }

  convertirB64(event: any) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagen = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    if (this.productosForms.valid) {
      const producto = this.productosForms.value;
      producto.foto = this.imagen; // Asigna la imagen al producto
      // Agrega un console.log para depurar y verificar los datos antes de enviarlos al servicio
      console.log('Producto a enviar:', producto);
      this.videoJuegosService.agregarNuevoProducto(producto).subscribe(response => {
        console.log('Producto agregado:', response);
        // Realiza cualquier otra acción necesaria después de agregar el producto
      });
    } else {
      console.error("El formulario es inválido.");
    }
  }
}
