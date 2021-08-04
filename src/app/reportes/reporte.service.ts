import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reporte } from './reporte.model';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {

  reporte = [];
  readonly APIurl = 'http://127.0.0.1:8000';
  constructor(private http: HttpClient) { }
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  getReportes(): Observable<any> {
    return this.http.get(this.APIurl + '/reporteprueba?format=json', { headers: this.httpHeaders });
  }

  addReporte(val: any){
    console.log(val);
    return this.http.post(this.APIurl + '/reporteprueba', val);
}

deleteReporte(reporteId){
  return this.http.delete(this.APIurl + '/reporteprueba/' + reporteId, { headers: this.httpHeaders }).toPromise()
  .then(() => {
    this.getReportes();
  });
}

  getReporte(reporteId): Observable<any> {
    return this.http.get(this.APIurl + '/reporteprueba/' + reporteId, { headers: this.httpHeaders });
  }

updateReporte(reporte): Observable<any> {
  return this.http.put(this.APIurl + '/reporteprueba/' + reporte.id, reporte);
}

guardarDatos(){
  this.getReportes().subscribe(data => {
    this.reporte = data;
  });
  return this.reporte;
}

public getFechaReporte(){
  this.reporte = this.guardarDatos();
}
}
