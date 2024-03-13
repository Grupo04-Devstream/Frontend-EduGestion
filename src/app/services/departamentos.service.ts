import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {
  private urlApi= 'http://localhost:8080/api/v1/departamento';
  constructor(private http: HttpClient) { }

  public getAllDepartamentos(): Observable<any[]> {
    return this.http.get<any[]>(this.urlApi);
  }

  public getDepartamentoById(id: number): Observable<any> {
    const url = `${this.urlApi}/${id}`;
    return this.http.get<any>(url);
  }

  public saveDepartamento(departamento: any): Observable<any> {
    return this.http.post<any>(this.urlApi, departamento);
  }

  public updateDepartamento(id: number, departamento: any): Observable<any> {
    const url = `${this.urlApi}/${id}`;
    return this.http.put<any>(url, departamento);
  }

  public deleteDepartamento(id: number): Observable<any> {
    const url = `${this.urlApi}/${id}`;
    return this.http.delete<any>(url);
  }
}
