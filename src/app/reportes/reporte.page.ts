import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReporteService } from './reporte.service';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.page.html',
  styleUrls: ['./reporte.page.scss'],
})
export class ReportePage implements OnInit {

  reportes = [];

  constructor(private reporteService: ReporteService,
    // tslint:disable-next-line:align
    private router: Router) { }

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
