import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhtmlresumeComponent } from './rhtmlresume.component';

describe('RhtmlresumeComponent', () => {
  let component: RhtmlresumeComponent;
  let fixture: ComponentFixture<RhtmlresumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhtmlresumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RhtmlresumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
