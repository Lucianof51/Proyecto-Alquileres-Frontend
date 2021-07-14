import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvisoService {
  aviso = [];
  readonly APIurl = 'http://127.0.0.1:8000';
  constructor(private http: HttpClient) { }
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  getAvisos(): Observable<any> {
    return this.http.get(this.APIurl + '/aviso?format=json', { headers: this.httpHeaders });
  }

  addAviso(val: any){
    console.log(val);
    return this.http.post(this.APIurl + '/aviso', val);
}

deleteAviso(avisoId){
  return this.http.delete(this.APIurl + '/aviso/' + avisoId, { headers: this.httpHeaders }).toPromise()
  .then(() => {
    this.getAvisos();
  });
}

  getAviso(avisoId): Observable<any> {
    return this.http.get(this.APIurl + '/aviso/' + avisoId, { headers: this.httpHeaders });
  }

updateAviso(aviso): Observable<any> {
  return this.http.put(this.APIurl + '/aviso/' + aviso.id, aviso);
}

}
