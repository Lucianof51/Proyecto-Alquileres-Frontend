import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReporteDetallePage } from './reporte-detalle.page';

describe('ReporteDetallePage', () => {
  let component: ReporteDetallePage;
  let fixture: ComponentFixture<ReporteDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteDetallePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReporteDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
