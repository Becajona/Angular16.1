import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProveedoresService } from 'src/app/servicios/proveedores.service';
import { Proveedores } from '../../modelos/video-juegos/proveedores.interface'; // Ajusta la ruta según tu estructura de archivos
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-actualizar-proovedor',
  templateUrl: './actualizar-proovedor.component.html',
  styleUrls: ['./actualizar-proovedor.component.css']
})
export class ActualizarProovedorComponent implements OnInit {
  provId: string | null = null;
  proveedorForm: FormGroup;
  proveedor: Proveedores = { 
    _id: '', 
    provId: '', 
    nombre: '', 
    direccion: '', 
    correoElectronico: '', 
    telefono: '',
    proveedorId: ''
  };

  constructor(private router: ActivatedRoute, private proveedoresService: ProveedoresService) {
    this.proveedorForm = new FormGroup({
      provId: new FormControl('', Validators.required),
      nombre: new FormControl('', Validators.required),
      direccion: new FormControl('', Validators.required),
      correoElectronico: new FormControl('', [Validators.required, Validators.email]),
      telefono: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.provId = this.router.snapshot.paramMap.get('id');
    console.log('ID del proveedor:', this.provId);
    if (this.provId) {
      this.obtenerProveedorPorId();
    }
  }

  onSubmit() {
    if (this.proveedorForm.valid && this.provId) {
      const proveedor = this.proveedorForm.value;
      this.proveedoresService.actualizarProveedorPorId(this.provId, proveedor).subscribe(response => {
        console.log('Proveedor actualizado:', response);
        // Aquí puedes redirigir a la página de detalle del proveedor actualizado
      });
    } else {
      console.error("El formulario es inválido o el ID del proveedor es nulo.");
    }
  }

  obtenerProveedorPorId(): void {
    if (this.provId !== null) {
      this.proveedoresService.obtenerProveedorPorId(this.provId).subscribe(data => {
        this.proveedorForm.setValue({
          provId: data.provId,
          nombre: data.nombre,
          direccion: data.direccion,
          correoElectronico: data.correoElectronico,
          telefono: data.telefono
        });
      });
    }
  }
}
