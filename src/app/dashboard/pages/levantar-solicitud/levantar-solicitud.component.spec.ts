import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevantarSolicitudComponent } from './levantar-solicitud.component';

describe('LevantarSolicitudComponent', () => {
  let component: LevantarSolicitudComponent;
  let fixture: ComponentFixture<LevantarSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LevantarSolicitudComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LevantarSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
