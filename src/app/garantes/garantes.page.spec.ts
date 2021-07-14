import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GarantesPage } from './garantes.page';

describe('GarantesPage', () => {
  let component: GarantesPage;
  let fixture: ComponentFixture<GarantesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarantesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GarantesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
