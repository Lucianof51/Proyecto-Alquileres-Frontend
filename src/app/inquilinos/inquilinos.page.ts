import { Component, OnInit } from '@angular/core';
import { InquilinosService } from './inquilinos.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inquilinos',
  templateUrl: './inquilinos.page.html',
  styleUrls: ['./inquilinos.page.scss'],
})
export class InquilinosPage implements OnInit {

  constructor(private inquilinosService: InquilinosService, private router: Router) { }
  inquilinos = [];
  ngOnInit() {
    this.inquilinosService.getInquilinos()
    .subscribe(data => {
      console.log(data);
      this.inquilinos = data;
    });
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  addNewInquilino(){
    this.router.navigate(['/inquilino-add']);
  }

  updateInquilino(inquilinoId){
    console.log(inquilinoId);
    this.router.navigate(['/inquilino-update', inquilinoId]);
    }
  verInquilino(inquilinoId){
    this.router.navigate(['/inquilinos', inquilinoId]);
    }
}
