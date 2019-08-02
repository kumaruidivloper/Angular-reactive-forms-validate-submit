import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitFlagFormComponent } from './submit-flag-form.component';

describe('SubmitFlagFormComponent', () => {
  let component: SubmitFlagFormComponent;
  let fixture: ComponentFixture<SubmitFlagFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitFlagFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitFlagFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
