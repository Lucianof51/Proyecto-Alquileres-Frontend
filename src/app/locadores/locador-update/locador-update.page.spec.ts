import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LocadorUpdatePage } from './locador-update.page';

describe('LocadorUpdatePage', () => {
  let component: LocadorUpdatePage;
  let fixture: ComponentFixture<LocadorUpdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocadorUpdatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LocadorUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
