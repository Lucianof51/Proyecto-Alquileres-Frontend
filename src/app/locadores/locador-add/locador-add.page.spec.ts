import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LocadorAddPage } from './locador-add.page';

describe('LocadorAddPage', () => {
  let component: LocadorAddPage;
  let fixture: ComponentFixture<LocadorAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocadorAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LocadorAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
