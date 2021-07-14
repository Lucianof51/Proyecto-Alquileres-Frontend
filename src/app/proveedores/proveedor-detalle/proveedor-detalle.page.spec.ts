import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProveedorDetallePage } from './proveedor-detalle.page';

describe('ProveedorDetallePage', () => {
  let component: ProveedorDetallePage;
  let fixture: ComponentFixture<ProveedorDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProveedorDetallePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProveedorDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
