import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {PropiedadesService} from './propiedades.service';
import { HttpClientModule } from '@angular/common/http';
import { Propiedad } from './propiedad.model';
import { AlertController, MenuController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular'

@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.page.html',
  styleUrls: ['./propiedades.page.scss'],
})
export class PropiedadesPage implements OnInit {

  propiedades: Propiedad;

  constructor(private menuCtrl: MenuController, private propiedadService: PropiedadesService, public alertCtrl: AlertController,
    // tslint:disable-next-line:align
    private router: Router, public actionSheetController: ActionSheetController) { }
    propiedad: Propiedad;
  ngOnInit() {
    this.propiedadService.getPropiedades()
    .subscribe(data => {
      this.propiedades = data;
    });
  }

  ionViewWillEnter() {
    this.propiedadService.getPropiedades()
    .subscribe(data => {
      this.propiedades = data;
    });
  }
  toggleMenu() {
    this.menuCtrl.toggle();
   }
  addNewPlace(){
    this.router.navigate(['/new-place']);
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  updatePropiedad(propiedadId){
    this.router.navigate(['/propiedad-update', propiedadId]);
  }
  verPropiedad(propiedadId){
    this.router.navigate(['/propiedades', propiedadId]);
    }

  doRefresh(event) {
      console.log('Begin async operation');
      this.propiedadService.getPropiedades()
      .subscribe(data => {
        console.log(data);
        this.propiedad = data;
      });
      setTimeout(() => {
        console.log('Async operation has ended');
        event.target.complete();
      }, 2000);
    }
}
