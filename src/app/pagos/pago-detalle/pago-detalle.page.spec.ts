import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PagoDetallePage } from './pago-detalle.page';

describe('PagoDetallePage', () => {
  let component: PagoDetallePage;
  let fixture: ComponentFixture<PagoDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagoDetallePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PagoDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
