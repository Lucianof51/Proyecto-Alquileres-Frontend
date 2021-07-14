import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlquileresVencimientoPage } from './alquileres-vencimiento.page';

describe('AlquileresVencimientoPage', () => {
  let component: AlquileresVencimientoPage;
  let fixture: ComponentFixture<AlquileresVencimientoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlquileresVencimientoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlquileresVencimientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
