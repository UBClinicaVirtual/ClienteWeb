import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsComponent } from './appointments.component';
import { LoadingComponent } from '../loading/loading.component';
import { AppointmentComponent } from '../appointment/appointment.component';
import { AppointmentDetailComponent } from '../appointment-detail/appointment-detail.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('AppointmentsComponent', () => {
  let component: AppointmentsComponent;
  let fixture: ComponentFixture<AppointmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentsComponent, LoadingComponent, AppointmentComponent, AppointmentDetailComponent ],
      imports: [SweetAlert2Module],
      providers: [ HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
