import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItensCarrocel2Component } from './itens-carrocel2.component';

describe('ItensCarrocel2Component', () => {
  let component: ItensCarrocel2Component;
  let fixture: ComponentFixture<ItensCarrocel2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItensCarrocel2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItensCarrocel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
