import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-caja',
  templateUrl: './caja.page.html',
  styleUrls: ['./caja.page.scss'],
})
export class CajaPage implements OnInit {

  constructor(private router: Router) { }
  ngOnInit() {
  }

  movimientos(){
    this.router.navigate(['/movimientos']);
  }

  pagos(){
    this.router.navigate(['/caja-pagos']);
  }

}
