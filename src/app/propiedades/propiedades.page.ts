import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {PropiedadesService} from './propiedades.service';
import { HttpClientModule } from '@angular/common/http';
import { Propiedad } from './propiedad.model';

@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.page.html',
  styleUrls: ['./propiedades.page.scss'],
})
export class PropiedadesPage implements OnInit {

  propiedades: Propiedad;

  constructor(private propiedadService: PropiedadesService,
    // tslint:disable-next-line:align
    private router: Router) { }

  ngOnInit() {
    this.propiedadService.getPropiedades()
    .subscribe(data => {
      this.propiedades = data;
      console.log(this.propiedades);
    });
  }

  ionViewWillEnter() {
   // this.propiedades = this.propiedadService.getPropiedades();
  }

  addNewPlace(){
    this.router.navigate(['/new-place']);
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  updatePropiedad(propiedadId){
    console.log(propiedadId);
    this.router.navigate(['/propiedad-update', propiedadId]);
    }
  verPropiedad(propiedadId){
    this.router.navigate(['/propiedades', propiedadId]);
    }

}
