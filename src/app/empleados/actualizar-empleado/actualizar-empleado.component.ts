import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmpleadoService } from 'src/app/servicios/empleado.service';

@Component({
  selector: 'app-actualizar-empleado',
  templateUrl: './actualizar-empleado.component.html',
  styleUrls: ['./actualizar-empleado.component.css']
})
export class ActualizarEmpleadoComponent implements OnInit {
  empleadoId: string | null = null;
  empleadoForm: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute, private EmpleadoService: EmpleadoService) {
    this.empleadoForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      edad: new FormControl('', Validators.required),
      genero: new FormControl('', Validators.required),
      salario: new FormControl('', Validators.required),
      telefono: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.empleadoId = this.route.snapshot.paramMap.get('id');
    console.log('ID del empleado:', this.empleadoId);
    if (this.empleadoId) {
      this.obtenerEmpleadoPorId();
    }
  }

  onSubmit() {
    if (this.empleadoForm.valid && this.empleadoId) {
      const empleado = this.empleadoForm.value;
      this.EmpleadoService.actualizarEmpleadoPorId(this.empleadoId, empleado).subscribe(response => {
        console.log('Empleado actualizado:', response);
        this.router.navigate(['/catalogoempleado']); 
      });
    } else {
      console.error("El formulario es inválido o el ID del empleado es nulo.");
    }
  }

  obtenerEmpleadoPorId(): void {
    if (this.empleadoId !== null) {
      this.EmpleadoService.obtenerEmpleadoPorId(this.empleadoId).subscribe(data => {
        this.empleadoForm.setValue({
          nombre: data.nombre,
          edad: data.edad,
          genero: data.genero,
          salario: data.salario,
          telefono: data.telefono
        });
      });
    }
  }
}
