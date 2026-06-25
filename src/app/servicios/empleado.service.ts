import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private apiUrl = 'http://192.168.1.72:4000/api/v1/empleados'; 

  constructor(private http: HttpClient) { }

  obtenerTodosLosEmpleados(): Observable<any[]> {
    const url = `${this.apiUrl}/get_all`; 
    return this.http.get<any[]>(url).pipe(
      tap(data => console.log('Datos obtenidos del servidor:', data)), 
      catchError(err => { 
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
      catchError(err => {
        console.error('Error al guardar empleado:', err);
        return throwError(err); 
      })
    );
  }

  actualizarEmpleadoPorId(id: string, empleado: any): Observable<any> {
    const url = `${this.apiUrl}/actualizar/${id}`; 
    return this.http.put<any>(url, empleado).pipe(
      tap(() => console.log('Empleado actualizado correctamente')), 
      catchError(err => { // Manejo de errores
        console.error('Error al actualizar empleado:', err);
        return throwError(err); 
      })
    );
  }
  
  obtenerEmpleadoPorId(id: string): Observable<any> {
    const url = `${this.apiUrl}/porID/${id}`; 
    return this.http.get<any>(url);
  }

  eliminarEmpleado(id: string): Observable<any> {
    const url = `${this.apiUrl}/eliminar/${id}`; 
    return this.http.delete(url).pipe(
      tap(() => console.log('Empleado eliminado correctamente')), 
      catchError(err => { 
        console.error('Error al eliminar empleado:', err);
        return throwError(err); 
      })
    );
  }

}
