import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-nuevo-clientes',
  templateUrl: './nuevo-clientes.component.html',
  styleUrls: ['./nuevo-clientes.component.css']
})
export class NuevoClientesComponent implements OnInit {
  clienteForm: FormGroup;

  constructor(private fb: FormBuilder,
              private clientesService: ClientesService,
              private router: Router) {
    this.clienteForm = this.fb.group({
      contrasena: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      nombre: ['', Validators.required],
      tipo_usuario: ['', Validators.required] // Si este campo es un select, necesitarás un control específico
    });
  }

  ngOnInit(): void {
  }

  agregarCliente() {
    if (this.clienteForm.valid) {
      const cliente = this.clienteForm.value;
      this.clientesService.guardarCliente(cliente).subscribe(
        () => {
          console.log('Cliente guardado correctamente');
          this.router.navigate(['/']); // Redireccionar a la página principal
        },
        error => {
          console.error('Error al guardar cliente:', error);
        }
      );
    } else {
      console.error('El formulario es inválido.');
    }
  }

  onSubmit() {
    if (this.clienteForm.valid) {
      const cliente = this.clienteForm.value;
      console.log('Cliente a enviar:', cliente);
      this.clientesService.guardarCliente(cliente).subscribe(response => {
        console.log('Cliente agregado:', response);
      }, error => {
        console.error('Error al agregar cliente:', error);
      });
    } else {
      console.error('El formulario es inválido.');
    }
  }
}
