import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickAccessButtonComponent } from './quick-access-button.component';

describe('QuickAccessButtonComponent', () => {
  let component: QuickAccessButtonComponent;
  let fixture: ComponentFixture<QuickAccessButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickAccessButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickAccessButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
