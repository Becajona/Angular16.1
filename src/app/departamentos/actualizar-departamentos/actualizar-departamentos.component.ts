import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Departamento } from 'src/app/modelos/video-juegos/departamentos.interface';
import { DepartamentosService } from 'src/app/servicios/departamentos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actualizar-departamentos',
  templateUrl: './actualizar-departamentos.component.html',
  styleUrls: ['./actualizar-departamentos.component.css']
})
export class ActualizarDepartamentosComponent implements OnInit{
  departamentoId: string | null = null;
  departamentoForm: FormGroup;
  departamento: Departamento = { 
    _id: '', 
    descripcion: '', 
    nombre: '', 
    responsable: '', 
    ubicacion: '' 
  };

  constructor(private route: ActivatedRoute, private departamentosService: DepartamentosService) {
    this.departamentoForm = new FormGroup({
      descripcion: new FormControl('', Validators.required),
      nombre: new FormControl('', Validators.required),
      responsable: new FormControl('', Validators.required),
      ubicacion: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.departamentoId = this.route.snapshot.paramMap.get('id');
    console.log('ID del departamento:', this.departamentoId);
    if (this.departamentoId) {
      this.obtenerDepartamentoPorId();
    }
  }

  onSubmit() {
    if (this.departamentoForm.valid && this.departamentoId) {
      const departamento = this.departamentoForm.value;
      this.departamentosService.actualizarDepartamentoPorId(this.departamentoId, departamento).subscribe(response => {
        console.log('Departamento actualizado:', response);
        // Aquí puedes redirigir a la página de detalle del departamento actualizado
      });
    } else {
      console.error("El formulario es inválido o el ID del departamento es nulo.");
    }
  }

  obtenerDepartamentoPorId(): void {
    if (this.departamentoId !== null) {
      this.departamentosService.obtenerDepartamentoPorId(this.departamentoId).subscribe(data => {
        this.departamentoForm.setValue({
          descripcion: data.descripcion,
          nombre: data.nombre,
          responsable: data.responsable,
          ubicacion: data.ubicacion
        });
      });
    }
  }
}