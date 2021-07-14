import { Component, OnInit } from '@angular/core';
import { GarantesService } from './garantes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-garantes',
  templateUrl: './garantes.page.html',
  styleUrls: ['./garantes.page.scss'],
})
export class GarantesPage implements OnInit {

  constructor(private garantesService: GarantesService, private router: Router) { }
  garantes = [];
  ngOnInit() {
    this.garantesService.getGarantes()
    .subscribe(data => {
      console.log(data);
      this.garantes = data;
    });
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  addNewGarante(){
    this.router.navigate(['/garante-add']);
  }
  updateGarante(garanteId){
  console.log(garanteId);
  this.router.navigate(['/garante-update', garanteId]);
  }
  verGarantes(garanteId){
    this.router.navigate(['/garantes', garanteId]);
  }
}
