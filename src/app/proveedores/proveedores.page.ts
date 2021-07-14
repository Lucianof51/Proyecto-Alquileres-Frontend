import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from './proveedores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.page.html',
  styleUrls: ['./proveedores.page.scss'],
})
export class ProveedoresPage implements OnInit {

  constructor(private proveedoresService: ProveedoresService, private router: Router) { }
  proveedores = [];
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
}
