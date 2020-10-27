import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProdutoCategoriaComponent } from './lista-produto-categoria.component';

describe('ListaProdutoCategoriaComponent', () => {
  let component: ListaProdutoCategoriaComponent;
  let fixture: ComponentFixture<ListaProdutoCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaProdutoCategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaProdutoCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
