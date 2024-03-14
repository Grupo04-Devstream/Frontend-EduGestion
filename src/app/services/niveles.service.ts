import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NivelesService {
  private API_SERVER = "http://localhost:8080/api/v1/nivel";


  constructor(private httpClient: HttpClient) {
  }

  public getAllNiveles(): Observable<any>{
    return this.httpClient.get(this.API_SERVER);
  }

  public saveNivel(nivel:any): Observable<any>{
    return this.httpClient.post(this.API_SERVER,nivel);
  }

  public deleteNivel(id:number):Observable<any>{
    return this.httpClient.delete(this.API_SERVER + "/delete/"+id);
  }

  public updateNivel(nivel:any):Observable<any>{
    return this.httpClient.put(this.API_SERVER + "/update",nivel);
  }
  
}
