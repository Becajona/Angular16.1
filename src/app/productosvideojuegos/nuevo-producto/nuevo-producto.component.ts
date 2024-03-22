import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { VideoJuegosService } from 'src/app/servicios/video-juegos.service';
import { VideoJuego } from 'src/app/modelos/video-juegos/apis-jon.interface';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

// Proveedores
import { ProveedoresService } from 'src/app/servicios/proveedores.service';
import { Proveedores } from 'src/app/modelos/video-juegos/proveedores.interface';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {
  listaprovedores: Proveedores[] = [];
  productosForms!: FormGroup; // Inicialización opcional
  miProd: VideoJuego = {
    _id: '',
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
  imagen1: any;
  proveedores: Proveedores[] = [];

  constructor(private proveedoresService: ProveedoresService,
    private videoJuegosService: VideoJuegosService,
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit() {
    this.proveedoresService.obtenerTodosLosProveedores()
      .subscribe(data => {
        console.log(data)
        this.listaprovedores = data;
      });
      
    this.productosForms = this.fb.group({
      // Define los campos del formulario aquí
    });
  }

  get_id_proveedor(id: any) {
    this.miProd.provId = id;
    console.log(this.miProd.provId);
  }

  convertir_B64(event: any) {
    if (event.target.files && event.target.files[0]) {
      var file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.imagen1 = reader.result;
      reader.readAsDataURL(file);
    }
  }

  new_product(miProd: VideoJuego): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };

    return this.http.post<any>('http://192.168.1.67:4000/api/v1/productos/nuevoProd', miProd, { headers })
      .pipe(
        tap((res: any) => {
          if (res.message == "producto insertado") {
            console.log("servicio", res.message)
          }
        }),
        catchError(err => of(err.error.message))
      )
  }

  enviarProd() {
    this.miProd.costo = Number(this.miProd.costo)
    this.miProd.foto = this.imagen1;
    console.log(this.miProd);

    this.new_product(this.miProd)
      .subscribe(data => {
        console.log("PRODUCTO", data);
        if (data) {
          this.router.navigateByUrl('/prodCatalogo');
        } else {
          console.log("error");
        }
      });
  }
}
