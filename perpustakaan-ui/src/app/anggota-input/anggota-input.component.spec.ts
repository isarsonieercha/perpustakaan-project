import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnggotaInputComponent } from './anggota-input.component';

describe('AnggotaInputComponent', () => {
  let component: AnggotaInputComponent;
  let fixture: ComponentFixture<AnggotaInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnggotaInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnggotaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
