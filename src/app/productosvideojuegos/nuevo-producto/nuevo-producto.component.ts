import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { VideoJuegosService } from 'src/app/servicios/video-juegos.service';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {
  imagen: any;
  productosForms: FormGroup;
  imagen1: any;
  miProd: any;

  constructor(private videoJuegosService: VideoJuegosService, private router: Router) {
    this.productosForms = new FormGroup({
      clave: new FormControl('', Validators.required),
      nombre: new FormControl('', Validators.required),
      categoria: new FormControl('', Validators.required),
      marcasId: new FormControl('', Validators.required),
      version: new FormControl('', Validators.required),
      idiomas: new FormControl('', Validators.required),
      jugadores: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
      costo: new FormControl('', Validators.required),
      precio: new FormControl('', Validators.required),
      foto: new FormControl('', Validators.required),
      fechaAdquisicion: new FormControl('', Validators.required),
      cantidadExistente: new FormControl('', Validators.required),
      estado: new FormControl('', Validators.required),
      origen: new FormControl('', Validators.required),
      provId: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    this.miProd = {
      _id: '',
      clave: '',
      nombre: '',
      categoria: '',
      marcasId: [],
      version: '',
      idiomas: [],
      jugadores: 0,
      descripcion: '',
      costo: 0,
      precio: 0,
      foto: '',
      fechaAdquisicion: '',
      fecharegistro: '',
      cantidadExistente: 0,
      estado: '',
      origen: '',
      provId: ''
    };
  }

  convertir_B64(event: any) {
    if (event.target.files && event.target.files[0]) {
      var file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.imagen1 = reader.result;
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    if (this.productosForms.valid) {
      const producto = this.productosForms.value;
      producto.foto = this.imagen;
      console.log('Producto a enviar:', producto);
      this.videoJuegosService.agregarNuevoProducto(producto).subscribe(response => {
        console.log('Producto agregado:', response);
        // Realiza cualquier otra acción necesaria después de agregar el producto
      });
    } else {
      console.error("El formulario es inválido.");
    }
  }

  enviarProd() {
    this.miProd.costo = Number(this.miProd.costo);
    this.miProd.foto = this.imagen1;
    console.log(this.miProd);
    
    this.videoJuegosService.new_product(this.miProd).subscribe(data => {
      console.log("PRODUCTO", data);
      if (data) {
        this.router.navigateByUrl('/prodCatalogo');
      } else {
        console.log("error");
      }
    });
  }
}
