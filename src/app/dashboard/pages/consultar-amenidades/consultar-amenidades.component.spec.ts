import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarAmenidadesComponent } from './consultar-amenidades.component';

describe('ConsultarAmenidadesComponent', () => {
  let component: ConsultarAmenidadesComponent;
  let fixture: ComponentFixture<ConsultarAmenidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarAmenidadesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarAmenidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
