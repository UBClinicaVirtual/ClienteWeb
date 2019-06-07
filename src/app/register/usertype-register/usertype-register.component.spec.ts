import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsertypeRegisterComponent } from './usertype-register.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('UsertypeRegisterComponent', () => {
  let component: UsertypeRegisterComponent;
  let fixture: ComponentFixture<UsertypeRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsertypeRegisterComponent ],
      imports: [ FormsModule],
      providers: [HttpClient, HttpHandler]
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
