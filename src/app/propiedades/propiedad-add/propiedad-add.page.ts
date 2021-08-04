import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PropiedadesService } from '../propiedades.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-propiedad-add',
  templateUrl: './propiedad-add.page.html',
  styleUrls: ['./propiedad-add.page.scss'],
})
export class PropiedadAddPage implements OnInit {

  constructor(private propiedadService: PropiedadesService,
              private router: Router, private alertCtrl: AlertController) { }

  @Input() dep: any;
  PropiedadNombre: any;
  PropiedadEstado: any;
  PropiedadTipo: any;

  ngOnInit() {
  }

  async saveNewPlace(ubicacion2: HTMLInputElement, estado2: HTMLInputElement, tipo2: HTMLInputElement){
   const ubicacion = ubicacion2.value;
   const estado = estado2.value;
   const tipo = tipo2.value;

   const val = {
    ubicacion,
    estado,
    tipo
   };
   this.propiedadService.addPropiedad(val).subscribe(res => {
      alert(res.toString());
  });
  const alertElement = await this.alertCtrl.create({
    header: 'Propiedad registrada',
    message: 'La propieddad se ha registrado con exito',
    buttons: [
      {
        text: 'OK',
        handler: () => {
          this.router.navigate(['/propiedades']);
        }
      }
    ]
  });
  await alertElement.present();
  }
}
