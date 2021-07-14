import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AvisoAddPage } from './aviso-add.page';

describe('AvisoAddPage', () => {
  let component: AvisoAddPage;
  let fixture: ComponentFixture<AvisoAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvisoAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AvisoAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
