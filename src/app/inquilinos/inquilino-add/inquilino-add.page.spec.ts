import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InquilinoAddPage } from './inquilino-add.page';

describe('InquilinoAddPage', () => {
  let component: InquilinoAddPage;
  let fixture: ComponentFixture<InquilinoAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InquilinoAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InquilinoAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
