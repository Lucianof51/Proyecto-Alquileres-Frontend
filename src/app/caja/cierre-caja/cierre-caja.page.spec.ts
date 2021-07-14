import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CierreCajaPage } from './cierre-caja.page';

describe('CierreCajaPage', () => {
  let component: CierreCajaPage;
  let fixture: ComponentFixture<CierreCajaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CierreCajaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CierreCajaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
