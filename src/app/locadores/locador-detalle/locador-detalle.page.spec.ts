import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LocadorDetallePage } from './locador-detalle.page';

describe('LocadorDetallePage', () => {
  let component: LocadorDetallePage;
  let fixture: ComponentFixture<LocadorDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocadorDetallePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LocadorDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
