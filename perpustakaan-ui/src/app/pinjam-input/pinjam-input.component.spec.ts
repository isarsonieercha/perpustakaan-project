import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinjamInputComponent } from './pinjam-input.component';

describe('PinjamInputComponent', () => {
  let component: PinjamInputComponent;
  let fixture: ComponentFixture<PinjamInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinjamInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinjamInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
