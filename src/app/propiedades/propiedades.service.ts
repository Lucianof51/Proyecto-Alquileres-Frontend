import { Injectable } from '@angular/core';
import {Propiedad} from './propiedad.model';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContratosService } from '../contratos/contratos.service';
import { Contrato } from '../contratos/contrato.model';

@Injectable({
  providedIn: 'root'
})
export class PropiedadesService {
  propiedad: Propiedad[];
  propiedad2: {
    id: number,
    estado: string
  }
  readonly APIurl = 'http://127.0.0.1:8000';
  constructor(private http: HttpClient, private contratoService: ContratosService) { }
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  contratos: Contrato[];
  getPropiedades(): Observable<any> {
    return this.http.get(this.APIurl + '/propiedad?format=json', { headers: this.httpHeaders });
  }

  addPropiedad(val: any){
    console.log(val);
    return this.http.post(this.APIurl + '/propiedad', val);
}

deletePropiedad(propiedadId){
  return this.http.delete(this.APIurl + '/propiedad/' + propiedadId, { headers: this.httpHeaders }).toPromise()
  .then(() => {
    this.getPropiedades();
  });
}

  getPropiedad(propiedadId): Observable<any> {
    return this.http.get(this.APIurl + '/propiedad/' + propiedadId, { headers: this.httpHeaders });
  }

updatePropiedad(propiedad: Propiedad): Observable<any> {
  return this.http.put(this.APIurl + '/propiedad/' + propiedad.id, propiedad);
}

guardarDatos(){
  this.getPropiedades().subscribe(data => {
    this.propiedad = data;
  });
  return this.propiedad;
}

public getPropiedadId(id: number): Propiedad {
  this.propiedad = this.guardarDatos();
  return this.guardarDatos().find(item => { return item.id === id;
  });
}

doRefresh(event) {
  console.log('Begin async operation');

  setTimeout(() => {
    console.log('Async operation has ended');
    event.target.complete();
  }, 2000);
}

}
