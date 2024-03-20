import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProveedoresService } from 'src/app/servicios/proveedores.service';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-nuevo-proovedor',
  templateUrl: './nuevo-proovedor.component.html',
  styleUrls: ['./nuevo-proovedor.component.css']
})


export class NuevoProveedorComponent implements OnInit {
  proveeForms: FormGroup;

  constructor(private fb: FormBuilder,
              private proveedoresService: ProveedoresService,
              private router: Router) {
    this.proveeForms = this.fb.group({
      provId: ['', Validators.required],
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      correoElectronico: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  agregarProveedor() {
    if (this.proveeForms.valid) {
      const proveedor = this.proveeForms.value;
      this.proveedoresService.guardarProveedor(proveedor).subscribe(
        () => {
          console.log('Proveedor guardado correctamente');
          this.router.navigate(['/index.html']); 
        },
        error => {
          console.error('Error al guardar proveedor:', error);

        }
      );
    } else {
      console.error("El formulario es inválido.");
      
    }
  }

  onSubmit() {
    if (this.proveeForms.valid) {
      const proveedor = this.proveeForms.value;
      console.log('Proveedor a enviar:', proveedor);
      this.proveedoresService.guardarProveedor(proveedor).subscribe(response => {
        console.log('Proveedor agregado:', response);

      }, error => {
        console.error('Error al agregar proveedor:', error);

      });
    } else {
      console.error("El formulario es inválido.");
      
    }
  }
  
}