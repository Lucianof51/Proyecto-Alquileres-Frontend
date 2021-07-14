import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PropiedadUpdatePage } from './propiedad-update.page';

describe('PropiedadUpdatePage', () => {
  let component: PropiedadUpdatePage;
  let fixture: ComponentFixture<PropiedadUpdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropiedadUpdatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PropiedadUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
