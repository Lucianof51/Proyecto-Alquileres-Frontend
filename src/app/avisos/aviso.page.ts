import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AvisoService } from './aviso.service';

@Component({
  selector: 'app-aviso',
  templateUrl: './aviso.page.html',
  styleUrls: ['./aviso.page.scss'],
})
export class AvisoPage implements OnInit {

  avisos = [];

  constructor(private avisoService: AvisoService,
    // tslint:disable-next-line:align
    private router: Router) { }

  ngOnInit() {
    this.avisoService.getAvisos()
    .subscribe(data => {
      this.avisos = data;
    });
  }

  ionViewWillEnter() {
   // this.propiedades = this.propiedadService.getPropiedades();
  }

  addNewAviso(){
    this.router.navigate(['/aviso-add']);
  }

  updateAviso(avisoId){
    this.router.navigate(['/aviso-update', avisoId]);
    }

  verAviso(avisoId){
    this.router.navigate(['/avisos', avisoId]);
    }

}
