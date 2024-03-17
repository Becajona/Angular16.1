import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoJuegosService } from 'src/app/servicios/video-juegos.service';
import { VideoJuego } from '../../modelos/video-juegos/apis-jon.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrls: ['./actualizar-producto.component.css']
})
export class ActualizarProductoComponent implements OnInit {
  prodId: string | null = null;
  producto: VideoJuego = { 
    _id: '', 
    clave: '', 
    nombre: '', 
    categoria:'',
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
  productosForms: FormGroup;

  constructor(private router: ActivatedRoute, private videoJuegosService: VideoJuegosService) {
    this.productosForms = new FormGroup({
      _id: new FormControl('', Validators.required),
      clave: new FormControl('', Validators.required),
      nombre: new FormControl('', Validators.required),
      categoria: new FormControl('', Validators.required),
      tipo: new FormControl('', Validators.required),
      marcasId: new FormControl([], Validators.required),
      version: new FormControl('', Validators.required),
      idiomas: new FormControl([], Validators.required),
      jugadores: new FormControl(0, Validators.required),
      descripcion: new FormControl('', Validators.required),
      costo: new FormControl(0, Validators.required),
      precio: new FormControl(0, Validators.required),
      foto: new FormControl('', Validators.required),
      fechaAdquisicion: new FormControl('', Validators.required),
      fecharegistro: new FormControl('', Validators.required),
      cantidadExistente: new FormControl(0, Validators.required),
      estado: new FormControl('', Validators.required),
      origen: new FormControl('', Validators.required),
      provId: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.prodId = this.router.snapshot.paramMap.get('id');
    console.log('ID del producto:', this.prodId);
    if (this.prodId) {
      this.obtenerProductoPorId();
    }
  }

  
  onSubmit() {
    if (this.productosForms.valid && this.prodId) {
      const producto = this.productosForms.value;
      this.videoJuegosService.actualizarProductoPorId(this.prodId, producto).subscribe(response => {
        console.log('Producto actualizado:', response);
        // Realiza cualquier otra acción necesaria después de actualizar el producto
      });
    } else {
      console.error("El formulario es inválido o el ID del producto es nulo.");
    }
  }
  

  obtenerProductoPorId(): void {
    if (this.prodId) {
      this.videoJuegosService.obtenerProductoPorId(this.prodId).subscribe((producto: VideoJuego) => {
        this.producto = producto;
        this.productosForms.patchValue(producto);
      });
    }
  }
}
