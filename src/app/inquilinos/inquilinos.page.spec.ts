import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InquilinosPage } from './inquilinos.page';

describe('InquilinosPage', () => {
  let component: InquilinosPage;
  let fixture: ComponentFixture<InquilinosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InquilinosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InquilinosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
