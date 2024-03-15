import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

//servicios
import { MarcasService } from 'src/app/servicios/marcas.service';
import { ProductService } from '../../servicios/video-juegos.service';
import { VideoJuego } from '../../modelos/video-juegos/apis-jon.interface';//Productos
@Component({
  selector: 'app-catalogo-productos',
  templateUrl: './catalogo-productos.component.html',
  styleUrls: ['./catalogo-productos.component.css']
})
export class CatalogoProductosComponent implements OnInit {
  listaProductos: VideoJuego[] = [];
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
    fechaAdquisicion: { $date: '' },
    fecharegistro: { $date: '' },
    cantidadExistente: 0,
    estado: '',
    origen: '',
    provId: '',
    _id: { $oid: '' } // Ensure _id property is an object with a $oid property
  };
  imagen1: any;

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productService.obtenerNew_api()
      .subscribe((data: VideoJuego[]) => { // Explicitly type data as VideoJuego[]
        console.log(data);
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
    return this.productService.nuevoProducto(miProd).pipe(
      tap((res: any) => {
        if (res.message === "producto insertado") {
          console.log("servicio", res.message);
        }
      }),
      catchError(err => of(err.error.message)) // Import 'of' function and use it here
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
}
