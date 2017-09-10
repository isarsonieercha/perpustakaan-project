import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BukuInputComponent } from './buku-input.component';

describe('BukuInputComponent', () => {
  let component: BukuInputComponent;
  let fixture: ComponentFixture<BukuInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BukuInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BukuInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
