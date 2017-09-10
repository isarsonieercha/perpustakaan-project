import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetugasInputComponent } from './petugas-input.component';

describe('PetugasInputComponent', () => {
  let component: PetugasInputComponent;
  let fixture: ComponentFixture<PetugasInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetugasInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetugasInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
