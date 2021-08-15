import { Component, OnInit } from '@angular/core';
import { InquilinosService } from 'src/app/inquilinos/inquilinos.service';
import { LocadoresService } from 'src/app/locadores/locadores.service';
import { AvisoService } from '../aviso.service';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-aviso-add',
  templateUrl: './aviso-add.page.html',
  styleUrls: ['./aviso-add.page.scss'],
})
export class AvisoAddPage implements OnInit {
subject='';
body='';
to='';

  constructor(public EmailComposer: EmailComposer) {}
ngOnInit() {

}

Enviar() {
 this.EmailComposer.open({
  to: this.to,
  cc: [],
  bcc: [],
  subject: this.subject,
  body: this.body,
  isHtml: false,
  app: 'gmail'
 }) 
}

}
