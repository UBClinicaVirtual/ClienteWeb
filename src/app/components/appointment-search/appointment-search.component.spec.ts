import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentSearchComponent } from './appointment-search.component';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from '../loading/loading.component';
import { AppointmentComponent } from '../appointment/appointment.component';
import { AppointmentDetailComponent } from '../appointment-detail/appointment-detail.component';
import { AppointmentsComponent } from '../appointments/appointments.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('AppointmentSearchComponent', () => {
  let component: AppointmentSearchComponent;
  let fixture: ComponentFixture<AppointmentSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentSearchComponent, LoadingComponent, AppointmentComponent, AppointmentDetailComponent, AppointmentsComponent ],
      imports: [ FormsModule, SweetAlert2Module ],
      providers: [ HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
