import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AvisoDetallePage } from './aviso-detalle.page';

describe('AvisoDetallePage', () => {
  let component: AvisoDetallePage;
  let fixture: ComponentFixture<AvisoDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvisoDetallePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AvisoDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
