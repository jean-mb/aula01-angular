import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosDetailsComponent } from './carros-details.component';

describe('CarrosDetailsComponent', () => {
  let component: CarrosDetailsComponent;
  let fixture: ComponentFixture<CarrosDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarrosDetailsComponent]
    });
    fixture = TestBed.createComponent(CarrosDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
