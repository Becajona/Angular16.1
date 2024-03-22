import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private apiUrl = 'http://192.168.1.67:4000/api/v1/empleados'; 

  constructor(private http: HttpClient) { }

  // Función para obtener todos los empleados
  obtenerTodosLosEmpleados(): Observable<any[]> {
    const url = `${this.apiUrl}/get_all`; 
    return this.http.get<any[]>(url).pipe(
      tap(data => console.log('Datos obtenidos del servidor:', data)), 
      catchError(err => { // Manejo de errores
        console.error('Error al obtener los datos del servidor:', err);
        return throwError(err); 
      })
    );
  }
  //crear nuevo 
  guardarEmpleado(empleado: any): Observable<any> {
    const url = `${this.apiUrl}/nuevoempleado`; 
    return this.http.post<any>(url, empleado).pipe(
      tap(() => console.log('Empleado guardado correctamente')), 
      catchError(err => { // Manejo de errores
        console.error('Error al guardar empleado:', err);
        return throwError(err); 
      })
    );
  }

  // Función para actualizar un empleado por su ID
  actualizarEmpleadoPorId(id: string, empleado: any): Observable<any> {
    const url = `${this.apiUrl}/actualizar/${id}`; 
    return this.http.put<any>(url, empleado).pipe(
      tap(() => console.log('Empleado actualizado correctamente')), 
      catchError(err => { // Manejo de errores
        console.error('Error al actualizar empleado:', err);
        return throwError(err); // Lanzar el error para que sea manejado por el componente que consuma este servicio
      })
    );
  }
  
  // Función para obtener un empleado por su ID
  obtenerEmpleadoPorId(id: string): Observable<any> {
    const url = `${this.apiUrl}/porID/${id}`; // URL completa para obtener un empleado por su ID
    return this.http.get<any>(url);
  }

  eliminarEmpleado(id: string): Observable<any> {
    const url = `${this.apiUrl}/eliminar/${id}`; // URL completa para eliminar un empleado
    return this.http.delete(url).pipe(
      tap(() => console.log('Empleado eliminado correctamente')), // Mostrar mensaje en consola si se elimina correctamente
      catchError(err => { // Manejo de errores
        console.error('Error al eliminar empleado:', err);
        return throwError(err); // Lanzar el error para que sea manejado por el componente que consuma este servicio
      })
    );
  }

}
