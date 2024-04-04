import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarritoService } from 'src/app/servicios/carrito.service';

@Component({
  selector: 'app-eliminar-carrito',
  templateUrl: './eliminar-carrito.component.html',
  styleUrls: ['./eliminar-carrito.component.css']
})
export class EliminarCarritoComponent implements OnInit {
  carritoId: string| null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private carritoService: CarritoService
  ) { }

  ngOnInit(): void {
    this.carritoId = this.route.snapshot.paramMap.get('id'); // Asigna el valor de carritoId en el ngOnInit
  }

  eliminarCarrito(id: string): void {
    this.carritoService.eliminarCarrito(id)
      .subscribe(
        () => {
          console.log('Carrito eliminado correctamente');
          alert("Eliminado correctamente");
          this.router.navigate(['/catalogocarrito']);
        },
        (error: any) => { 
          console.error(error);
          if (error && error.error && error.error.error) {
            // Mostrar mensaje de error al usuario
            alert(error.error.error);
          } else {
            // Mensaje de error genérico
            alert("Ocurrió un error al eliminar el carrito. Por favor, inténtelo de nuevo.");
          }
        }
      );
  }
}
