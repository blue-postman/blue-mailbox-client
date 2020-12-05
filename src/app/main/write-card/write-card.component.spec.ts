import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteCardComponent } from './write-card.component';

describe('WriteCardComponent', () => {
  let component: WriteCardComponent;
  let fixture: ComponentFixture<WriteCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
