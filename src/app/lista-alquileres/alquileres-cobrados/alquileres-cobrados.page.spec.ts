import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlquileresCobradosPage } from './alquileres-cobrados.page';

describe('AlquileresCobradosPage', () => {
  let component: AlquileresCobradosPage;
  let fixture: ComponentFixture<AlquileresCobradosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlquileresCobradosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlquileresCobradosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
