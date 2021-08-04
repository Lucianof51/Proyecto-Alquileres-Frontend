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

  async updatePropiedad(propiedadId){
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Actualizar propiedad',
      inputs: [
        {
          name: 'id',
          type: 'number',
          id: propiedadId,
          disabled: true,
          value: propiedadId
        },
        {
          name: 'ubicacion',
          type: 'text',
          id: 'ubicacion',
          placeholder: 'Ubicación'
        },
        {
          name: 'estado',
          type: 'text',
          id: 'estado',
          placeholder: 'Estado'
        },
        {
          name: 'tipo',
          type: 'text',
          id: 'tipo',
          placeholder: 'Tipo'
        }
      ],
      buttons: [
        {
          text: 'CANCELAR',
          role: 'CANCELAR',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'ACTUALIZAR',
          handler: (data) =>{
            this.propiedad = data;
            this.propiedadService.updatePropiedad(this.propiedad).subscribe(); 
          }
        }
      ]
    });

    await alert.present();
  }
  verPropiedad(propiedadId){
    this.router.navigate(['/propiedades', propiedadId]);
    }
    
    async addPago() {
      const alert = await this.alertCtrl.create({
        cssClass: 'my-custom-class',
        header: 'Agregar nueva propiedad',
        inputs: [
          {
            name: 'ubicacion',
            type: 'text',
            id: 'ubicacion',
            placeholder: 'Ubicación'
          },
          {
            name: 'estado',
            type: 'text',
            id: 'estado',
            placeholder: 'Estado'
          },
          {
            name: 'tipo',
            type: 'text',
            id: 'tipo',
            placeholder: 'Tipo'
          }
        ],
        buttons: [
          {
            text: 'CANCELAR',
            role: 'CANCELAR',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          }, {
            text: 'CREAR',
            handler: (data) =>{
              this.propiedad = data;
              this.propiedadService.addPropiedad(this.propiedad).subscribe(); 
            }
          }
        ]
      });
  
      await alert.present();
    }
    toggleMenu() {
      this.menuCtrl.toggle();
     }
}
