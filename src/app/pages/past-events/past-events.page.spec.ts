import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PastEventsPage } from './past-events.page';

describe('PastEventsPage', () => {
  let component: PastEventsPage;
  let fixture: ComponentFixture<PastEventsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastEventsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PastEventsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
