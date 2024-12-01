import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerCarrinhoComponent } from './container-carrinho.component';

describe('ContainerCarrinhoComponent', () => {
  let component: ContainerCarrinhoComponent;
  let fixture: ComponentFixture<ContainerCarrinhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContainerCarrinhoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerCarrinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
