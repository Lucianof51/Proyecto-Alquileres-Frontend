import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../persona.model';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {
  readonly APIurl = 'http://127.0.0.1:8000';
  proveedor: Persona;
  items: any[] = [];
  my_notes_offline = [];
  constructor(private http: HttpClient) { }
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  getProveedores(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/proveedor?format=json', { headers: this.httpHeaders });
  }
  
  addProveedor(val: any) {
    console.log(val);
    this.proveedor = val;
    this.my_notes_offline.push({
      id: val.id,
      proveedor: val,
      action: 'create'
    });
    return this.http.post(this.APIurl + '/proveedor', val);
   

  }

  getProveedor(proveedorId): Observable<any> {
    return this.http.get(this.APIurl + '/proveedor/' + proveedorId, { headers: this.httpHeaders });
  }

  deleteProveedor(proveedorId){
    return this.http.delete(this.APIurl + '/proveedor/' + proveedorId, { headers: this.httpHeaders }).toPromise()
    .then(() => {
      this.getProveedores();
    });
  }

  updateProveedor(proveedor: Persona): Observable<any> {
    return this.http.put(this.APIurl + '/proveedor/' + proveedor.id, proveedor);
  }
}

