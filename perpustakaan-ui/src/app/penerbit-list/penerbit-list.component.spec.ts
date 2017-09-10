import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenerbitListComponent } from './penerbit-list.component';

describe('PenerbitListComponent', () => {
  let component: PenerbitListComponent;
  let fixture: ComponentFixture<PenerbitListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenerbitListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenerbitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
