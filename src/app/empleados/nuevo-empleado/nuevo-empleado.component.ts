import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpleadoService } from 'src/app/servicios/empleado.service'; // Ajusta la ruta del servicio de empleados

@Component({
  selector: 'app-nuevo-empleado',
  templateUrl: './nuevo-empleado.component.html',
  styleUrls: ['./nuevo-empleado.component.css']
})
export class NuevoEmpleadoComponent implements OnInit {
  empleadoForm: FormGroup;

  constructor(private fb: FormBuilder,
              private empleadoService: EmpleadoService, 
              private router: Router) {
    this.empleadoForm = this.fb.group({
      nombre: ['', Validators.required],
      edad: ['', Validators.required],
      genero: ['', Validators.required],
      salario: ['', Validators.required],
      telefono: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  agregarEmpleado() {
    if (this.empleadoForm.valid) {
      const empleado = this.empleadoForm.value;
      this.empleadoService.guardarEmpleado(empleado).subscribe(
        () => {
          console.log('Empleado guardado correctamente');
          this.router.navigate(['/catalogoempleado']); // Redirige al catálogo de empleados
        },
        error => {
          console.error('Error al guardar empleado:', error);
        }
      );
    } else {
      console.error("El formulario es inválido.");
    }
  }
}
