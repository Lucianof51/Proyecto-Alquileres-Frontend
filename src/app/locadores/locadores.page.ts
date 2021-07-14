import { Component, OnInit } from '@angular/core';
import { LocadoresService } from './locadores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-locadores',
  templateUrl: './locadores.page.html',
  styleUrls: ['./locadores.page.scss'],
})
export class LocadoresPage implements OnInit {
  constructor(private locadoresService: LocadoresService, private router: Router) { }
  locadores = [];
  ngOnInit() {
    this.locadoresService.getLocadores()
    .subscribe(data => {
      console.log(data);
      this.locadores = data;
    });
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

addNewLocador(){
    this.router.navigate(['/locador-add']);
  }

  updateLocador(locadorId){
    console.log(locadorId);
    this.router.navigate(['/locador-update', locadorId]);
    }
  verLocador(locadorId){
    this.router.navigate(['/locadores', locadorId]);
    }
}
