import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendCardViewComponent } from './send-card-view.component';

describe('SendCardViewComponent', () => {
  let component: SendCardViewComponent;
  let fixture: ComponentFixture<SendCardViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendCardViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
