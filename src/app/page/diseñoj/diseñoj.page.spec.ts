import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DiseñojPage} from './diseñoj.page';


describe('DiseñojPage', () => {
  let component: DiseñojPage;
  let fixture: ComponentFixture<DiseñojPage>;


  beforeEach(() => {
    fixture = TestBed.createComponent(DiseñojPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

