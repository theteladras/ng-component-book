import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontsHomeComponent } from './fonts-home.component';

describe('FontsHomeComponent', () => {
  let component: FontsHomeComponent;
  let fixture: ComponentFixture<FontsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FontsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FontsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
