import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnggotaListComponent } from './anggota-list.component';

describe('AnggotaListComponent', () => {
  let component: AnggotaListComponent;
  let fixture: ComponentFixture<AnggotaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnggotaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnggotaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
