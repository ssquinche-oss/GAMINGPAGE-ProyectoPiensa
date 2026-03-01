import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InstruccionPage } from './instruccion.page';


describe('InstruccionPage', () => {
  let component: InstruccionPage;
  let fixture: ComponentFixture<InstruccionPage>;


  beforeEach(() => {
    fixture = TestBed.createComponent(InstruccionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

