import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivrosListarComponent } from './livros-listar.component';

describe('LivrosListarComponent', () => {
  let component: LivrosListarComponent;
  let fixture: ComponentFixture<LivrosListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LivrosListarComponent]
    });
    fixture = TestBed.createComponent(LivrosListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
