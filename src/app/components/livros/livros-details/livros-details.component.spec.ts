import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivrosDetailsComponent } from './livros-details.component';

describe('LivrosDetailsComponent', () => {
  let component: LivrosDetailsComponent;
  let fixture: ComponentFixture<LivrosDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LivrosDetailsComponent]
    });
    fixture = TestBed.createComponent(LivrosDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
