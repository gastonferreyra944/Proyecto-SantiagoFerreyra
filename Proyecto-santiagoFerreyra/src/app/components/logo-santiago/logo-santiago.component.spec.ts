import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoSantiagoComponent } from './logo-santiago.component';

describe('LogoSantiagoComponent', () => {
  let component: LogoSantiagoComponent;
  let fixture: ComponentFixture<LogoSantiagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoSantiagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoSantiagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
