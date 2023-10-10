import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosListarComponent } from './carros-listar.component';

describe('CarrosListarComponent', () => {
  let component: CarrosListarComponent;
  let fixture: ComponentFixture<CarrosListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarrosListarComponent]
    });
    fixture = TestBed.createComponent(CarrosListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
