import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pago } from './pago.model';

@Injectable({
  providedIn: 'root'
})
export class PagosService {

  readonly APIurl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }
  pagos: Pago[];
  pago = [];
  arr: any[];
  arr1: any[] = [];
  d = new Date();
  date = this.d.getDate();
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
 
  getPagos(): Observable<any> {
    return this.http.get(this.APIurl + '/pago?format=json', { headers: this.httpHeaders });
  }

  addPago(val: any){
    console.log(val);
    return this.http.post(this.APIurl + '/pago', val);
}

deletePago(pagoId){
  return this.http.delete(this.APIurl + '/pago/' + pagoId, { headers: this.httpHeaders }).toPromise()
  .then(() => {
    this.getPagos();
  });
}

  getPago(pagoId): Observable<any> {
    return this.http.get(this.APIurl + '/pago/' + pagoId, { headers: this.httpHeaders });
  }

updatePago(pagos){
  console.log(pagos);
  return this.http.put(this.APIurl + '/pago/' + pagos.id, pagos);
}

guardarDatos(){
  this.getPagos().subscribe(data => {
    this.pago = data;
  });
  return this.pago;

}
getPagoContrato(contrato: any): Pago[]{

  this.pagos = this.guardarDatos();
// tslint:disable-next-line:triple-equals
  const pago = this.pagos.filter( item => item.contrato == contrato);
  return pago;
}

guardarDatos2(){
  this.getPagos().subscribe(data => {
    this.pago = data;
  });
  return this.pago;
  // tslint:disable-next-line:label-position
}

public getPagoId(id: any): Pago[] {
  this.pago = this.guardarDatos();
  return this.guardarDatos().find(item => { return item.id === id;
  });
}

getPagoFecha(month: any): Observable<any>{

  this.pagos = this.guardarDatos();
// tslint:disable-next-line:triple-equals
  // tslint:disable-next-line:max-line-length
  return of(this.pagos.filter( item => new Date(item.fecha_pago).getMonth() == month));
}

public getPagoFechas(id: number): Pago {
  this.pago = this.guardarDatos();
  const pagos = this.guardarDatos().find(item => { return item.id === id;
  });
  return pagos;
}
}
