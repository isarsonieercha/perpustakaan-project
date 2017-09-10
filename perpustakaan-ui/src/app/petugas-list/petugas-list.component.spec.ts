import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetugasListComponent } from './petugas-list.component';

describe('PetugasListComponent', () => {
  let component: PetugasListComponent;
  let fixture: ComponentFixture<PetugasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetugasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetugasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
