import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlquileresPendientesPage } from './alquileres-pendientes.page';

describe('AlquileresPendientesPage', () => {
  let component: AlquileresPendientesPage;
  let fixture: ComponentFixture<AlquileresPendientesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlquileresPendientesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlquileresPendientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
