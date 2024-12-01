import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CantainerCadasrtroComponent } from './cantainer-cadasrtro.component';

describe('CantainerCadasrtroComponent', () => {
  let component: CantainerCadasrtroComponent;
  let fixture: ComponentFixture<CantainerCadasrtroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CantainerCadasrtroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CantainerCadasrtroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
