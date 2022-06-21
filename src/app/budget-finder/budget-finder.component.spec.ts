import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetFinderComponent } from './budget-finder.component';

describe('BudgetFinderComponent', () => {
  let component: BudgetFinderComponent;
  let fixture: ComponentFixture<BudgetFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetFinderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
