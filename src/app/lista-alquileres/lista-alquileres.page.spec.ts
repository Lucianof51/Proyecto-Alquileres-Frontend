import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaAlquileresPage } from './lista-alquileres.page';

describe('ListaAlquileresPage', () => {
  let component: ListaAlquileresPage;
  let fixture: ComponentFixture<ListaAlquileresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAlquileresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaAlquileresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
