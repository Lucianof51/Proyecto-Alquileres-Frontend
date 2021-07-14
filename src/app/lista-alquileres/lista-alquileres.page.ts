import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-alquileres',
  templateUrl: './lista-alquileres.page.html',
  styleUrls: ['./lista-alquileres.page.scss'],
})
export class ListaAlquileresPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  alquileres_c(){
    this.router.navigate(['/alquiler-c']);
  }

  alquileres_p(){
    this.router.navigate(['/alquiler-p']);
  }

  alquileres_v(){
    this.router.navigate(['/alquiler-v']);
  }
}

