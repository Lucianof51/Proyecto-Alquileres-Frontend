import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReporteService } from './reporte.service';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.page.html',
  styleUrls: ['./reporte.page.scss'],
})
export class ReportePage implements OnInit {
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  reportes = [];
  title: string;
  cover: File;
  constructor(private reporteService: ReporteService,
    // tslint:disable-next-line:align
    private router: Router, private http: HttpClient) { }

  onTitleChanged(event: any){
    this.title = event.target.value;
  }

  onCoverChanged(event: any){
    this.cover = event.target.files[0];
  }

  newBook()
{
const uploadData = new FormData();
uploadData.append('title', this.title);
uploadData.append('cover', this.cover, this.cover.name);
this.http.post('http://127.0.0.1:8000/libro/', uploadData).subscribe(
  data => console.log(data),
  error => console.log(error)
);
}
  ngOnInit() {
    this.reporteService.getReportes()
    .subscribe(data => {
      this.reportes = data;
      console.log(this.reportes);
    });
  }

  ionViewWillEnter() {
   // this.propiedades = this.propiedadService.getPropiedades();
  }

  addNewReporte(){
    this.router.navigate(['/reporte-add']);
  }

  updateReporte(reporteId){
    console.log(reporteId);
    this.router.navigate(['/reporte-update', reporteId]);
    }

  verReporte(reporteId){
    this.router.navigate(['/reportes', reporteId]);
    }

}
