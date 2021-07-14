import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InquilinoDetallePage } from './inquilino-detalle.page';

describe('InquilinoDetallePage', () => {
  let component: InquilinoDetallePage;
  let fixture: ComponentFixture<InquilinoDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InquilinoDetallePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InquilinoDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
