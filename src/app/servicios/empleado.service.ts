import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private apiUrl = 'http://192.168.1.67:4000/api/v1/empleados'; // URL para acceder a los empleados

  constructor(private http: HttpClient) { }

  // Función para obtener todos los empleados
  obtenerTodosLosEmpleados(): Observable<any[]> {
    const url = `${this.apiUrl}/get_all`; // URL completa para obtener todos los empleados
    return this.http.get<any[]>(url).pipe(
      tap(data => console.log('Datos obtenidos del servidor:', data)), // Mostrar datos obtenidos en la consola
      catchError(err => { // Manejo de errores
        console.error('Error al obtener los datos del servidor:', err);
        return throwError(err); // Lanzar el error para que sea manejado por el componente que consuma este servicio
      })
    );
  }
}
