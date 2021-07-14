import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../persona.model';


@Injectable({
  providedIn: 'root'
})
export class LocadoresService {
  readonly APIurl = 'http://127.0.0.1:8000';
  locadores: Persona[];
  constructor(private http: HttpClient) { }
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  getLocadores(): Observable<any> {
    return this.http.get(this.APIurl + '/locador?format=json', { headers: this.httpHeaders });

  }

  addLocadores(val: any) {
    console.log(val);
    return this.http.post(this.APIurl + '/locador', val);
  }

  getLocador(locadorId): Observable<any> {
    return this.http.get(this.APIurl + '/locador/' + locadorId, { headers: this.httpHeaders });
  }

  deleteLocador(locadorId){
    return this.http.delete(this.APIurl + '/locador/' + locadorId, { headers: this.httpHeaders }).toPromise()
    .then(() => {
      this.getLocadores();
    });
  }

  updateLocador(locador: Persona): Observable<any> {
    return this.http.put(this.APIurl + '/locador/' + locador.id, locador);
  }

  getLocadorContrato(locadorId: any){
  this.locadores = this.guardarDatos(locadorId);
// tslint:disable-next-line:triple-equals
  }

  guardarDatos(locadorId){
    this.getLocador(locadorId).subscribe(data => {
      this.locadores = data;
    });
    return this.locadores;
  }

  }
