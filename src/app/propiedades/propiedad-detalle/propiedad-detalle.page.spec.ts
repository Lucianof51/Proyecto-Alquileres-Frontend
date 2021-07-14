import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PropiedadDetallePage } from './propiedad-detalle.page';

describe('PropiedadDetallePage', () => {
  let component: PropiedadDetallePage;
  let fixture: ComponentFixture<PropiedadDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropiedadDetallePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PropiedadDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
