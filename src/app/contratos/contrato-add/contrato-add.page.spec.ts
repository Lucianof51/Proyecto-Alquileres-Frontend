import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContratoAddPage } from './contrato-add.page';

describe('ContratoAddPage', () => {
  let component: ContratoAddPage;
  let fixture: ComponentFixture<ContratoAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratoAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContratoAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
