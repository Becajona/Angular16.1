import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarProovedorComponent } from './actualizar-proovedor.component';

describe('ActualizarProovedorComponent', () => {
  let component: ActualizarProovedorComponent;
  let fixture: ComponentFixture<ActualizarProovedorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarProovedorComponent]
    });
    fixture = TestBed.createComponent(ActualizarProovedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
