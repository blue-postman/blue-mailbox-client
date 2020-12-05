import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendCardComponent } from './send-card.component';

describe('SendCardComponent', () => {
  let component: SendCardComponent;
  let fixture: ComponentFixture<SendCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
