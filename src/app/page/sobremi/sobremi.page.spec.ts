import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SobreMiPage } from './sobremi.page';

describe('SobreMiPage', () => {
  let component: SobreMiPage;
  let fixture: ComponentFixture<SobreMiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SobreMiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
