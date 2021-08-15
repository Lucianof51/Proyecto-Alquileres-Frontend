import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PropiedadesService } from '../propiedades.service';

@Component({
  selector: 'app-propiedad-update',
  templateUrl: './propiedad-update.page.html',
  styleUrls: ['./propiedad-update.page.scss'],
})
export class PropiedadUpdatePage implements OnInit {
 

  constructor(private propiedadService: PropiedadesService,
              private router: Router,
              private activatedRoute: ActivatedRoute, private alertCtrl: AlertController, private formBuilder: FormBuilder) { }

  id2: any;


   ngOnInit() {
     this.activatedRoute.paramMap.subscribe(paramMap => {
       if (!paramMap.has('propiedadId')) {
         // redirect
         this.router.navigate(['/propiedades']);
       }
       const recipeId = paramMap.get('propiedadId');
       this.id2 = recipeId;
   });
 }

get ubicacion() {
  return this.registrationForm.get("ubicacion");
}
get tipo() {
  return this.registrationForm.get('tipo');
}
get estado() {
  return this.registrationForm.get('estado');
}
get id() {
  return this.id2;
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
  id : [''],
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
  console.log(this.id);
  this.registrationForm.value.id = this.id; 
  console.log(this.registrationForm.value);
  this.propiedadService.updatePropiedad(this.registrationForm.value).subscribe(res => {
    alert(res.toString());
});
const alertElement = await this.alertCtrl.create({
  header: 'Propiedad actualizada',
  message: 'Los datos de la propiedad se ha actualizado con exito',
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
