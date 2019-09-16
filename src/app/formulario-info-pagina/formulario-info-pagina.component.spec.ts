import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioInfoPaginaComponent } from './formulario-info-pagina.component';

describe('FormularioInfoPaginaComponent', () => {
  let component: FormularioInfoPaginaComponent;
  let fixture: ComponentFixture<FormularioInfoPaginaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioInfoPaginaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioInfoPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
