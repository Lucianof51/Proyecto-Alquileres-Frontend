import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Propiedad } from '../propiedad.model';
import { AlertController } from '@ionic/angular';
import { PropiedadesService } from '../propiedades.service';

@Component({
  selector: 'app-propiedad-detalle',
  templateUrl: './propiedad-detalle.page.html',
  styleUrls: ['./propiedad-detalle.page.scss'],
})
export class PropiedadDetallePage implements OnInit {
  propiedades: Propiedad;
  // tslint:disable-next-line:max-line-length
  constructor(private activatedRoute: ActivatedRoute, private propiedadService: PropiedadesService, private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('propiedadId')) {
        // redirect
        this.router.navigate(['/propiedades']);
      }
      const recipeId = paramMap.get('propiedadId');
      console.log(recipeId);
      this.propiedadService.getPropiedad(recipeId)
    .subscribe(data => {
      this.propiedades = data;
      console.log(this.propiedades);
    });
    });
  }
  async deletePlace(){
  const alertElement = await this.alertCtrl.create({
    header: 'Estas seguro de querer eliminar',
    message: 'Se cuidadoso',
    buttons: [
      {
       text: 'Cancel',
       role: 'cancel'
      },
      {
        text: 'Delete',
        handler: () => {
          this.propiedadService.deletePropiedad(this.propiedades.id);
          this.router.navigate(['/propiedades']);
        }
      }
    ]
  });
  await alertElement.present();
}
}
