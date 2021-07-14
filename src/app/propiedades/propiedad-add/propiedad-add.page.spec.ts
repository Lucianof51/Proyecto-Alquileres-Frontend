import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PropiedadAddPage } from './propiedad-add.page';

describe('PropiedadAddPage', () => {
  let component: PropiedadAddPage;
  let fixture: ComponentFixture<PropiedadAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropiedadAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PropiedadAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
