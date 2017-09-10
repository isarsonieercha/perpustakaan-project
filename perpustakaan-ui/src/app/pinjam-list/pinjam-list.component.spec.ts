import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinjamListComponent } from './pinjam-list.component';

describe('PinjamListComponent', () => {
  let component: PinjamListComponent;
  let fixture: ComponentFixture<PinjamListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinjamListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinjamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
