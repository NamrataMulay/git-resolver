import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Leftsideb1Component } from './leftsideb1.component';

describe('Leftsideb1Component', () => {
  let component: Leftsideb1Component;
  let fixture: ComponentFixture<Leftsideb1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Leftsideb1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Leftsideb1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
