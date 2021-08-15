import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from './proveedores.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Persona } from '../persona.model';


@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.page.html',
  styleUrls: ['./proveedores.page.scss'],
})
export class ProveedoresPage implements OnInit {

  constructor(private proveedoresService: ProveedoresService, private router: Router , private menuCtrl: MenuController) { }
  proveedores: Persona;

  ngOnInit() {
    this.proveedoresService.getProveedores()
    .subscribe(data => {
      console.log(data);
      this.proveedores = data;
    });
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  addNewProveedor(){
    this.router.navigate(['/proveedor-add']);
  }

  updateProveedor(proveedorId){
    console.log(proveedorId);
    this.router.navigate(['/proveedor-update', proveedorId]);
    }
  verProveedor(proveedorId){
    this.router.navigate(['/proveedores', proveedorId]);
    }

    toggleMenu() {
      this.menuCtrl.toggle();
     }
  
  doRefresh(event) {
      console.log('Begin async operation');
      this.proveedoresService.getProveedores()
      .subscribe(data => {
        console.log(data);
        this.proveedores = data;
      });
      setTimeout(() => {
        console.log('Async operation has ended');
        event.target.complete();
      }, 2000);
    }

}
