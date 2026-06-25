import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { ProveedoresService } from 'src/app/servicios/proveedores.service';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {
  listaprovedores: any[] = []; 
  productosForms!: FormGroup;
  imagen1: any;
  miProd: any; 

  constructor(private proveedoresService: ProveedoresService,
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit() {
    this.proveedoresService.obtenerTodosLosProveedores().subscribe(data => {
      this.listaprovedores = data;
      this.inicializarFormulario();
    });
  }

  inicializarFormulario() {
    this.productosForms = this.fb.group({
        nombre: ['', Validators.required],
        categoria: ['', Validators.required],
        marcasId: ['', Validators.required],
        precio: ['', Validators.required],
        idiomas: ['', Validators.required],
        jugadores: ['', Validators.required],
        descripcion: ['', Validators.required], 
        costo: ['', Validators.required], 
        foto: ['', Validators.required], 
        cantidadExistente: ['', Validators.required], 
        provId: ['', Validators.required], 
        fechaAdq: ['', Validators.required] 
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

  new_product(miProd: any): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };

    return this.http.post<any>('http://192.168.1.72:4000/api/v1/productos/nuevoProd', miProd, { headers })
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
    this.miProd = this.productosForms.value;

    this.miProd.jugadores = Number(this.miProd.jugadores);
    this.miProd.costo = Number(this.miProd.costo);
    this.miProd.cantidadExistente = Number(this.miProd.cantidadExistente);
    this.miProd.precio = Number(this.miProd.precio);
    
    console.log("Datos a enviar al servidor:", this.miProd);

    this.new_product(this.miProd)
      .subscribe(data => {
        console.log("PRODUCTO", data);
        if (data) {
          alert("Producto agregado correctamente");
          this.router.navigateByUrl('/productosCatalogos');
        } else {
          console.log("error");
        }
      });
  }
}