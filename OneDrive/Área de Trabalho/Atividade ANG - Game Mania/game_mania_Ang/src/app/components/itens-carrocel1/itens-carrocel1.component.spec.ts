import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItensCarrocel1Component } from './itens-carrocel1.component';

describe('ItensCarrocel1Component', () => {
  let component: ItensCarrocel1Component;
  let fixture: ComponentFixture<ItensCarrocel1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItensCarrocel1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItensCarrocel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
