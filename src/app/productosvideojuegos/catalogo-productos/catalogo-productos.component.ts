import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

// Importa el servicio correcto
import { VideoJuegosService } from 'src/app/servicios/video-juegos.service';
import { VideoJuego } from '../../modelos/video-juegos/apis-jon.interface';

@Component({
  selector: 'app-catalogo-productos',
  templateUrl: './catalogo-productos.component.html',
  styleUrls: ['./catalogo-productos.component.css']
})
export class CatalogoProductosComponent implements OnInit {
  listaProductos: VideoJuego[] = [];
  page: number = 1; // Inicializa la página en 1
  itemsPerPage: number = 10; // Número de productos por página
  miProd: VideoJuego = {
    clave: '',
    nombre: '',
    categoria: {
      categoria: '',
      tipo: ''
    },
    marcasId: [],
    version: '',
    idiomas: [],
    jugadores: 0,
    descripcion: '',
    costo: 0,
    precio: 0,
    foto: '',
    fechaAdquisicion: '' ,
    fecharegistro: '' ,
    cantidadExistente: 0,
    estado: '',
    origen: '',
    provId: '',
    _id: '' 
  };
  imagen1: any;

  constructor(private videojuegoService: VideoJuegosService, private router: Router) { }
  
  ngOnInit(): void {
    this.videojuegoService.obtenerNew_api()
      .subscribe((data: VideoJuego[]) => {
        console.log('Datos recibidos:', data);
        this.listaProductos = data;
      });
  }
  
  
  convertir_B64(event: any) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.imagen1 = reader.result;
      reader.readAsDataURL(file);
    }
  }

  nuevoProducto(miProd: VideoJuego): Observable<any> {
    return this.videojuegoService.nuevoProducto(miProd).pipe(
      tap((res: any) => {
        if (res.message === "producto insertado") {
          console.log("servicio", res.message);
        }
      }),
      catchError(err => of(err.error.message))
    );
  }

  enviarProd() {
    this.miProd.costo = Number(this.miProd.costo);
    this.miProd.foto = this.imagen1;
    console.log(this.miProd);

    this.nuevoProducto(this.miProd).subscribe(data => {
      console.log("PRODUCTO", data);
      if (data) {
        this.router.navigateByUrl('/prodCatalogo');
      } else {
        console.log("error");
      }
    });
  }
  previousPage() {
    if (this.page > 1) {
      this.page--;
    }
  }

  nextPage() {
    if (this.page < this.totalPages) {
      this.page++;
    }
  }

  get totalPages(): number {
    return Math.ceil(this.listaProductos.length / this.itemsPerPage);
  }
}


