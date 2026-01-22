import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstiloPage} from './estilo.page';


describe('EstiloPage', () => {
  let component: EstiloPage;
  let fixture: ComponentFixture<EstiloPage>;


  beforeEach(() => {
    fixture = TestBed.createComponent(EstiloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

