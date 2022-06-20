import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveInputsComponent } from './save-inputs.component';

describe('SaveInputsComponent', () => {
  let component: SaveInputsComponent;
  let fixture: ComponentFixture<SaveInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveInputsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
