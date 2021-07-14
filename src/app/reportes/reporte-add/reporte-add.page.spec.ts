import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReporteAddPage } from './reporte-add.page';

describe('ReporteAddPage', () => {
  let component: ReporteAddPage;
  let fixture: ComponentFixture<ReporteAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReporteAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
