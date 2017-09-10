import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BukuListComponent } from './buku-list.component';

describe('BukuListComponent', () => {
  let component: BukuListComponent;
  let fixture: ComponentFixture<BukuListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BukuListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BukuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
