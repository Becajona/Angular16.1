import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { VideoJuegosService } from 'src/app/servicios/video-juegos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {
  productosForms: FormGroup;
  miProd: any;
  imagen1: any;


  constructor(private fb: FormBuilder,
              private videoJuegosService: VideoJuegosService,
              private router: Router) {
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
      provId: ['', Validators.required],
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
  }

  agregarProducto() {
    const videoJuegosService = {
      nombre: this.productosForms.get('nombre')?.value,
      categoria: this.productosForms.get('categoria')?.value,
      marcasId: this.productosForms.get('marcasId')?.value,
      version: this.productosForms.get('version')?.value,
      idiomas: this.productosForms.get('idiomas')?.value,
      jugadores: this.productosForms.get('jugadores')?.value,
      descripcion: this.productosForms.get('descripcion')?.value,
      costo: this.productosForms.get('costo')?.value,
      precio: this.productosForms.get('precio')?.value,
      foto: this.productosForms.get('foto')?.value,
      cantidadExistente: this.productosForms.get('cantidadExistente')?.value,
      estado: this.productosForms.get('estado')?.value,
      origen: this.productosForms.get('origen')?.value,
      provId: this.productosForms.get('provId')?.value
    };

    console.log(videoJuegosService);
    this.videoJuegosService.guardarProducto(videoJuegosService).subscribe(data => {
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
      this.productosForms.reset();
    });
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
      console.error("El formulario es inválido.");
    }
  }

  convertir_B64(event: any) {
    
    if (event.target.files && event.target.files[0])
    {
    var file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = e => this.imagen1 =
    reader.result;
    reader.readAsDataURL(file);
    
    }
    }



}
