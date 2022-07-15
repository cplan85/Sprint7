import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleFontComponent } from './title-font.component';

describe('TitleFontComponent', () => {
  let component: TitleFontComponent;
  let fixture: ComponentFixture<TitleFontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleFontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleFontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
