import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DepartamentosService } from 'src/app/servicios/departamentos.service';

@Component({
  selector: 'app-nuevo-departamentos',
  templateUrl: './nuevo-departamentos.component.html',
  styleUrls: ['./nuevo-departamentos.component.css']
})
export class NuevoDepartamentosComponent {

  departamentoForm: FormGroup; // Define el formulario para el nuevo departamento

  constructor(private fb: FormBuilder,
              private departamentosService: DepartamentosService, // Inyecta el servicio de departamentos
              private router: Router) {
    // Crea el formulario y define las validaciones
    this.departamentoForm = this.fb.group({
      descripcion: ['', Validators.required],
      nombre: ['', Validators.required],
      responsable: ['', Validators.required],
      ubicacion: ['', Validators.required]
    });
  }

  // Método para agregar un nuevo departamento
  agregarDepartamento() {
    if (this.departamentoForm.valid) {
      const departamento = this.departamentoForm.value;
      this.departamentosService.guardarDepartamento(departamento).subscribe(
        () => {
          console.log('Departamento guardado correctamente');
          this.router.navigate(['/index.html']); // Redirecciona a la página principal o a donde desees
        },
        error => {
          console.error('Error al guardar departamento:', error);
          // Puedes manejar el error aquí, como mostrar un mensaje al usuario
        }
      );
    } else {
      console.error("El formulario es inválido.");
      // Puedes mostrar un mensaje al usuario indicando que el formulario es inválido
    }
  }

  // Método para manejar el envío del formulario
  onSubmit() {
    if (this.departamentoForm.valid) {
      const departamento = this.departamentoForm.value;
      console.log('Departamento a enviar:', departamento);
      this.departamentosService.guardarDepartamento(departamento).subscribe(response => {
        console.log('Departamento agregado:', response);
        // Realiza cualquier otra acción necesaria después de agregar el departamento
      }, error => {
        console.error('Error al agregar departamento:', error);
        // Puedes manejar el error aquí, como mostrar un mensaje al usuario
      });
    } else {
      console.error("El formulario es inválido.");
      // Puedes mostrar un mensaje al usuario indicando que el formulario es inválido
    }
  }

}
