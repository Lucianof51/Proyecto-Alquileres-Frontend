import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContratoDetallePage } from './contrato-detalle.page';

describe('ContratoDetallePage', () => {
  let component: ContratoDetallePage;
  let fixture: ComponentFixture<ContratoDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratoDetallePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContratoDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
