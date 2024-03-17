import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MarcasService } from 'src/app/servicios/marcas.service';

@Component({
  selector: 'app-nueva-marca',
  templateUrl: './nueva-marca.component.html',
  styleUrls: ['./nueva-marca.component.css']
})
export class NuevaMarcaComponent {
  marcaForm: FormGroup;

  constructor(private fb: FormBuilder,
              private marcasService: MarcasService,
              private router: Router) {
    this.marcaForm = this.fb.group({
      marcaId: ['', Validators.required],
      nombre: ['', Validators.required],
      segmentoMercado: ['', Validators.required],
      slogan: ['', Validators.required],
      productosDestacados: ['', Validators.required]
    });
  }

  agregarMarca() {
    if (this.marcaForm.valid) {
      const marca = this.marcaForm.value;
      this.marcasService.guardarMarca(marca).subscribe(
        () => {
          console.log('Marca guardada correctamente');
          this.router.navigate(['/index.html']); // Redireccionar a la página principal o a donde desees
        },
        error => {
          console.error('Error al guardar marca:', error);
          // Puedes manejar el error aquí, como mostrar un mensaje al usuario
        }
      );
    } else {
      console.error("El formulario es inválido.");
      // Puedes mostrar un mensaje al usuario indicando que el formulario es inválido
    }
  }

  onSubmit() {
    if (this.marcaForm.valid) {
      const marca = this.marcaForm.value;
      console.log('Marca a enviar:', marca);
      this.marcasService.guardarMarca(marca).subscribe(response => {
        console.log('Marca agregada:', response);
        // Realiza cualquier otra acción necesaria después de agregar la marca
      }, error => {
        console.error('Error al agregar marca:', error);
        // Puedes manejar el error aquí, como mostrar un mensaje al usuario
      });
    } else {
      console.error("El formulario es inválido.");
      // Puedes mostrar un mensaje al usuario indicando que el formulario es inválido
    }
  }
}
