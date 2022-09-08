import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginVerificarCorreoComponent } from './login-verificar-correo.component';

describe('LoginVerificarCorreoComponent', () => {
  let component: LoginVerificarCorreoComponent;
  let fixture: ComponentFixture<LoginVerificarCorreoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginVerificarCorreoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginVerificarCorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
