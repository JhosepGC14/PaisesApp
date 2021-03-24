import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesTableComponent } from './paises-table.component';

describe('PaisesTableComponent', () => {
  let component: PaisesTableComponent;
  let fixture: ComponentFixture<PaisesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
