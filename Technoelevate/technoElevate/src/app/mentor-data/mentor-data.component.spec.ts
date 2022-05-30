import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorDataComponent } from './mentor-data.component';

describe('MentorDataComponent', () => {
  let component: MentorDataComponent;
  let fixture: ComponentFixture<MentorDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
