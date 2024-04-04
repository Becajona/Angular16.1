import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { FormsModule,FormControl ,Validators, FormGroup } from '@angular/forms';


import { VideoJuegosService } from 'src/app/servicios/video-juegos.service';
import { VideoJuego } from '../../modelos/video-juegos/apis-jon.interface';

@Component({
  selector: 'app-catalogo-productos',
  templateUrl: './catalogo-productos.component.html',
  styleUrls: ['./catalogo-productos.component.css']
})
export class CatalogoProductosComponent implements OnInit {


  listaProductos: VideoJuego[] = [];
  page: number = 1; 
  itemsPerPage: number = 10; 
  miProd: VideoJuego = {_id: '',
  nombre: '',
  categoria: '',
  marcasId: '',

  idiomas: '',
  jugadores: 0, // Cambiado a string
  descripcion: '',
  costo: 0, // Cambiado a string
  precio: 0, // Cambiado a string
  foto: '',
  cantidadExistente: 0, // Cambiado a string

  provId: '',
  fechaAdq: ''
};
  imagen1: any;

  constructor(private videojuegoService: VideoJuegosService, private router: Router) { }
  
  ngOnInit(): void {
    this.obtenerProductos();
  }


  obtenerProductos() {
    this.videojuegoService.obtenerTodosLosProductos()
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

  agregarProducto() {
    this.miProd.costo = Number(this.miProd.costo);
    this.miProd.foto = this.imagen1;
    console.log(this.miProd);

    this.videojuegoService.guardarProducto(this.miProd).subscribe(data => {
      console.log("PRODUCTO", data);
      if (data) {
        this.obtenerProductos(); 
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
