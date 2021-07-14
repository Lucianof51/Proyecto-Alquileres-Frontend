import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InquilinoUpdatePage } from './inquilino-update.page';

describe('InquilinoUpdatePage', () => {
  let component: InquilinoUpdatePage;
  let fixture: ComponentFixture<InquilinoUpdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InquilinoUpdatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InquilinoUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
