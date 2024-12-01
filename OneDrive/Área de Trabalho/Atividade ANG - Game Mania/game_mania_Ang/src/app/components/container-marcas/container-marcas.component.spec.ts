import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerMarcasComponent } from './container-marcas.component';

describe('ContainerMarcasComponent', () => {
  let component: ContainerMarcasComponent;
  let fixture: ComponentFixture<ContainerMarcasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContainerMarcasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerMarcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
