import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GaranteUpdatePage } from './garante-update.page';

describe('GaranteUpdatePage', () => {
  let component: GaranteUpdatePage;
  let fixture: ComponentFixture<GaranteUpdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaranteUpdatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GaranteUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
