import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenerbitInputComponent } from './penerbit-input.component';

describe('PenerbitInputComponent', () => {
  let component: PenerbitInputComponent;
  let fixture: ComponentFixture<PenerbitInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenerbitInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenerbitInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
