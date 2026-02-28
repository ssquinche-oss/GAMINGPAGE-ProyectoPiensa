import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InstruccionesReglasPage } from './instruccionesreglas.page';


describe('InstruccionesReglasPage', () => {
  let component: InstruccionesReglasPage;
  let fixture: ComponentFixture<InstruccionesReglasPage>;


  beforeEach(() => {
    fixture = TestBed.createComponent(InstruccionesReglasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

