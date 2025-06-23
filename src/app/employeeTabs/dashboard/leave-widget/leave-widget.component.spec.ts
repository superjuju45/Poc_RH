import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveWidgetComponent } from './leave-widget.component';

describe('LeaveWidgetComponent', () => {
  let component: LeaveWidgetComponent;
  let fixture: ComponentFixture<LeaveWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaveWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
