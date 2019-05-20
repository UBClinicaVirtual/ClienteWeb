import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsertypeRegisterComponent } from './usertype-register.component';

describe('UsertypeRegisterComponent', () => {
  let component: UsertypeRegisterComponent;
  let fixture: ComponentFixture<UsertypeRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsertypeRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsertypeRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
