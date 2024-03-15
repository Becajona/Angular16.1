import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarProovedorComponent } from './eliminar-proovedor.component';

describe('EliminarProovedorComponent', () => {
  let component: EliminarProovedorComponent;
  let fixture: ComponentFixture<EliminarProovedorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarProovedorComponent]
    });
    fixture = TestBed.createComponent(EliminarProovedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
