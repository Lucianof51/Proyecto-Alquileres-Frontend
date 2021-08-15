import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PropiedadesService } from '../propiedades.service';
import { AlertController } from '@ionic/angular';
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-propiedad-add',
  templateUrl: './propiedad-add.page.html',
  styleUrls: ['./propiedad-add.page.scss'],
})
export class PropiedadAddPage implements OnInit {
  constructor(private propiedadService: PropiedadesService,
              private router: Router, private alertCtrl: AlertController,
              private formBuilder: FormBuilder) { }
              get ubicacion() {
                return this.registrationForm.get("ubicacion");
              }
              get tipo() {
                return this.registrationForm.get('tipo');
              }
              get estado() {
                return this.registrationForm.get('estado');
              }
        
              public errorMessages = {
                ubicacion: [
                  { type: 'required', message: 'Ubicación es requerida' }
                ],
                tipo: [
                  { type: 'required', message: 'Tipo de propiedad es requerido' }
                ],
                estado: [
                  { type: 'required', message: 'Estado es requerido' }
                ]
              };
              registrationForm = this.formBuilder.group({
                ubicacion: ['', [Validators.required]],
                tipo: [
                  '',
                  [
                    Validators.required
                  ]
                ],
                estado: [
                  '',
                  [
                    Validators.required
                  ]
                ]
              });
              public async submit() {
                console.log(this.registrationForm.value);
                this.propiedadService.addPropiedad(this.registrationForm.value).subscribe(res => {
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
  ngOnInit() {
  }
  
}
