import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GaranteDetallePage } from './garante-detalle.page';

describe('GaranteDetallePage', () => {
  let component: GaranteDetallePage;
  let fixture: ComponentFixture<GaranteDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaranteDetallePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GaranteDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
