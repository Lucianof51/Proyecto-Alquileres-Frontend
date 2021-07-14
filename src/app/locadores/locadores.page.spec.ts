import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LocadoresPage } from './locadores.page';

describe('LocadoresPage', () => {
  let component: LocadoresPage;
  let fixture: ComponentFixture<LocadoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocadoresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LocadoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
