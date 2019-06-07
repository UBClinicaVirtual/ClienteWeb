import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentComponent } from './appointment.component';
import { SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import { SwalDefaults } from '@sweetalert2/ngx-sweetalert2/di';

describe('AppointmentComponent', () => {
  let component: AppointmentComponent;
  let fixture: ComponentFixture<AppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentComponent ],
      imports: [SweetAlert2Module],
      providers: [ SwalDefaults]
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

  it('should not have to make a dummy test for it to detect the rest of the tests', () => {
    var dummy = true;
    expect(dummy).toBe(true);
  });

  it('but apparently i do', () => {
    var a = 1;
    expect(a).toBe(1);
  });
});
