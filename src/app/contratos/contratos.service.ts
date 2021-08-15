import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GarantesService } from '../garantes/garantes.service';
import { Contrato } from './contrato.model';

@Injectable({
  providedIn: 'root'
})
export class ContratosService {
  contrato = [];
  contratos: Contrato[];
  readonly APIurl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  getContratos(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/contrato?format=json', { headers: this.httpHeaders });
  }

  getContrato(contratoId): Observable<any>{
    return this.http.get(this.APIurl + '/contrato/' + contratoId, { headers: this.httpHeaders });
  }

  addContrato(val: any) {
    console.log(val);
    return this.http.post(this.APIurl + '/contrato', val);
  }

  updateContrato(contratos: Contrato) {
    return this.http.put(this.APIurl + '/contrato/' + contratos.id, contratos);
  }
  deleteContrato(contratoId){
    return this.http.delete(this.APIurl + '/contrato/' + contratoId, { headers: this.httpHeaders }).toPromise()
    .then(() => {
      this.getContratos();
    });
  }

  guardarDatos(){
    this.getContratos().subscribe(data => {
      this.contrato = data;
    });
    return this.contrato;
    // tslint:disable-next-line:label-position
  }

  guardarDatos2(){
    this.getContratos().subscribe(data => {
      this.contratos = data;
    });
    return this.contratos;
  }

  public getContratoId(id: number): Contrato {
    this.contratos = this.guardarDatos2();
    return this.guardarDatos2().find(item => { return item.id === id;
});
  }

  getPagoContrato(contrato: any): Contrato[]{

    this.contrato = this.guardarDatos();
    return this.contrato.filter( item => item.id === contrato);
  }


}
