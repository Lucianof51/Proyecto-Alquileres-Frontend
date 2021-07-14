import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GaranteAddPage } from './garante-add.page';

describe('GaranteAddPage', () => {
  let component: GaranteAddPage;
  let fixture: ComponentFixture<GaranteAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaranteAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GaranteAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
