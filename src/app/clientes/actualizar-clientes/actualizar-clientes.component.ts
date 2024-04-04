import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClientesService } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-actualizar-clientes',
  templateUrl: './actualizar-clientes.component.html',
  styleUrls: ['./actualizar-clientes.component.css']
})
export class ActualizarClientesComponent implements OnInit {
  clienteId: string | null = null;
  clienteForm: FormGroup;

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private clientesService: ClientesService) {
    this.clienteForm = this.fb.group({
      contrasena: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      nombre: ['', Validators.required],
      tipo_usuario: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.clienteId = this.route.snapshot.paramMap.get('id');
    console.log('ID del cliente:', this.clienteId);
    if (this.clienteId) {
      this.obtenerClientePorId();
    }
  }

  onSubmit() {
    if (this.clienteForm.valid && this.clienteId) {
      const cliente = this.clienteForm.value;
      this.clientesService.actualizarClientePorId(this.clienteId, cliente).subscribe(response => {
        console.log('Cliente actualizado:', response);
      });
    } else {
      console.error("El formulario es inválido o el ID del cliente es nulo.");
    }
  }

  obtenerClientePorId(): void {
    if (this.clienteId !== null) {
      this.clientesService.obtenerClientePorId(this.clienteId).subscribe(data => {
        this.clienteForm.setValue({
          contrasena: data.contrasena,
          correo: data.correo,
          nombre: data.nombre,
          tipo_usuario: data.tipo_usuario
        });
      });
    }
  }
}
