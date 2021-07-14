import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProveedorAddPage } from './proveedor-add.page';

describe('ProveedorAddPage', () => {
  let component: ProveedorAddPage;
  let fixture: ComponentFixture<ProveedorAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProveedorAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProveedorAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
