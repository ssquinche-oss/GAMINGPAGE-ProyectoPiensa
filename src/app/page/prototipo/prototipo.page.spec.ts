import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrototipoPage} from './prototipo.page';


describe('PrototipoPage', () => {
  let component: PrototipoPage;
  let fixture: ComponentFixture<PrototipoPage>;


  beforeEach(() => {
    fixture = TestBed.createComponent(PrototipoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

