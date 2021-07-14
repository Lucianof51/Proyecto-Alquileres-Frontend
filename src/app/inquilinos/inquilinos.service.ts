import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../persona.model';

@Injectable({
  providedIn: 'root'
})
export class InquilinosService {
  readonly APIurl = 'http://127.0.0.1:8000';
  constructor(private http: HttpClient) { }
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  getInquilinos(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/inquilino?format=json', { headers: this.httpHeaders });

  }

  addInquilinos(val: any) {
    console.log(val);
    return this.http.post(this.APIurl + '/inquilino', val);
  }

  getInquilino(inquilinoId): Observable<any> {
    return this.http.get(this.APIurl + '/inquilino/' + inquilinoId, { headers: this.httpHeaders });
  }

  deleteInquilino(inquilinoId){
    return this.http.delete(this.APIurl + '/inquilino/' + inquilinoId, { headers: this.httpHeaders }).toPromise()
    .then(() => {
      this.getInquilinos();
    });
  }

  updateInquilino(inquilino: Persona): Observable<any> {
    return this.http.put(this.APIurl + '/inquilino/' + inquilino.id, inquilino);
  }
}
