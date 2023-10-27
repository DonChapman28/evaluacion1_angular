import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioAlumnosPage } from './inicio-alumnos.page';

describe('InicioAlumnosPage', () => {
  let component: InicioAlumnosPage;
  let fixture: ComponentFixture<InicioAlumnosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InicioAlumnosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
