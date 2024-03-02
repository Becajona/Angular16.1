import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoProovedorComponent } from './nuevo-proovedor.component';

describe('NuevoProovedorComponent', () => {
  let component: NuevoProovedorComponent;
  let fixture: ComponentFixture<NuevoProovedorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevoProovedorComponent]
    });
    fixture = TestBed.createComponent(NuevoProovedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
