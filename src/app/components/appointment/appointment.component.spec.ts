import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentComponent } from './appointment.component';
import { SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import { HttpClient, HttpHandler } from '@angular/common/http';


describe('AppointmentComponent', () => {
  let component: AppointmentComponent;
  let fixture: ComponentFixture<AppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentComponent ],
      imports: [SweetAlert2Module],
      providers: [ HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
