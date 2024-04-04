import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Importa también Router
import { VideoJuegosService } from 'src/app/servicios/video-juegos.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrls: ['./actualizar-producto.component.css']
})
export class ActualizarProductoComponent implements OnInit {
  prodId: string | null = null;
  productosForms: FormGroup;
  required_fields: string[] = ['nombre', 'categoria', 'idiomas', 'jugadores', 'descripcion', 'costo', 'foto', 'cantidadExistente', 'provId', 'marcasId', 'fechaAdq'];

  constructor(private router: Router, // Inyecta Router en lugar de ActivatedRoute
              private route: ActivatedRoute,
              private videoJuegosService: VideoJuegosService) {
    this.productosForms = new FormGroup({
      nombre: new FormControl('', Validators.required),
      categoria: new FormControl('', Validators.required),
      marcasId: new FormControl('', Validators.required),
      idiomas: new FormControl('', Validators.required),
      jugadores: new FormControl(0, Validators.required),
      descripcion: new FormControl('', Validators.required),
      costo: new FormControl(0, Validators.required),
      precio: new FormControl(0, Validators.required),
      foto: new FormControl('', Validators.required),
      cantidadExistente: new FormControl(0, Validators.required),
      provId: new FormControl('', Validators.required),
      fechaAdq: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.prodId = this.route.snapshot.paramMap.get('id');
    console.log('ID del producto:', this.prodId);
    if (this.prodId) {
      this.obtenerProductoPorId();
    }
  }

  onSubmit(): void {
    if (this.productosForms.valid && this.prodId) {
      const formularioValido = this.verificarCamposRequeridos();
      if (!formularioValido) {
        console.error('Faltan campos requeridos.');
        return;
      }

      const producto = this.productosForms.value;
      this.videoJuegosService.actualizarProducto(this.prodId, producto).pipe(
        catchError(error => {
          console.error('Error al actualizar producto:', error);
          throw 'Error al actualizar producto. Por favor, inténtalo de nuevo.';
        })
      ).subscribe(response => {
        console.log('Producto actualizado:', response);
        alert("Actualizado Correctamente!!");
        // Navegar a la ruta '/catalogocarrito' después de la actualización exitosa
        this.router.navigate(['/productosCatalogos']);
      });
    } else {
      console.error("El formulario es inválido o el ID del producto es nulo.");
      alert("Error: El formulario es inválido o el ID del producto es nulo.");
    }
  }

  obtenerProductoPorId(): void {
    if (this.prodId !== null) {
      this.videoJuegosService.obtenerProductoPorId(this.prodId).subscribe(data => {
        this.productosForms.setValue({
          nombre: data.nombre,
          categoria: data.categoria,
          marcasId: data.marcasId,
          idiomas: data.idiomas,
          jugadores: data.jugadores,
          descripcion: data.descripcion,
          costo: data.costo,
          precio: data.precio,
          foto: data.foto,
          cantidadExistente: data.cantidadExistente,
          provId: data.provId,
          fechaAdq: data.fechaAdq
        });
      });
    }
  }

  verificarCamposRequeridos(): boolean {
    const values = this.productosForms.value;
    return this.required_fields.every(field => values[field] !== null && values[field] !== undefined && values[field] !== '');
  }
}
