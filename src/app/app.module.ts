import { BrowserModule } from '@angular/platform-browser';
import {GoPaymentComponent} from "./components/go-payment/go-payment.component";
import {PopupComponent} from "./components/popup/popup.component";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './views/home/home.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import { LogInComponent } from './views/patients/log-in/log-in.component';
import { DashButtonComponent } from './components/dash-button/dash-button.component';
import { ProfileButtonComponent } from './components/profile-button/profile-button.component';
import {MatButtonModule} from "@angular/material/button";
import {NgOptimizedImage} from "@angular/common";
import { DoctorCardComponent } from './components/doctor-card/doctor-card.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import { ReviewComponent } from './components/review/review.component';
import {SourcesService} from "./services/sources.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {LogInCardComponent} from "./components/log-in-card/log-in-card.component";
import {MatCardModule} from "@angular/material/card";
import {MatTabsModule} from "@angular/material/tabs";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {FormsModule} from "@angular/forms";
import { DashboardComponent } from './views/patients/dashboard/dashboard.component';
import { ListDoctorsComponent } from './views/patients/list-doctors/list-doctors.component';
import { DoctorProfileComponent } from './views/patients/doctor-profile/doctor-profile.component';
import { DoctorReviewsComponent } from './views/patients/doctor-reviews/doctor-reviews.component';
import { NewReviewToDoctorComponent } from './views/patients/new-review-to-doctor/new-review-to-doctor.component';
import { NewCardComponent } from './components/new-card/new-card.component';
import { ListNewsComponent} from "./views/patients/list-news/list-news.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import { MoreInfoNewsComponent } from './components/more-info-news/more-info-news.component';
import { DoctorDateComponent } from './views/patients/doctor-date/doctor-date.component';
import { PaymentComponent } from './views/patients/payment/payment.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {MatSliderModule} from "@angular/material/slider";
import { MedicalHistoryComponent } from './views/patients/medical-history/medical-history.component';
import { ListPrescriptionComponent } from './views/patients/list-prescription/list-prescription.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import { PrescriptionComponent } from './views/patients/prescription/prescription.component';
import {MatSelectModule} from "@angular/material/select";
import { ProfileComponent } from './views/patients/profile/profile.component';
import { EditProfileComponent } from './views/patients/edit-profile/edit-profile.component';
import {MatSnackBar} from "@angular/material/snack-bar";
import { LogInDoctorComponent } from './views/doctors/log-in-doctor/log-in-doctor.component';
import { MedicalHistoryListComponent } from './views/doctors/medical-history-list/medical-history-list.component';
import { PatientCardComponent } from './components/patient-card/patient-card.component';
import { MedicalHistoryPatientComponent } from './views/doctors/medical-history-patient/medical-history-patient.component';
import { AppointmentsComponent } from './views/doctors/appointments/appointments.component';
import { PatientDateCardComponent } from './components/patient-date-card/patient-date-card.component';
import { DashboardDoctorComponent } from './views/doctors/dashboard-doctor/dashboard-doctor.component';
import { SidebarDoctorComponent } from './components/sidebar-doctor/sidebar-doctor.component';
import { AppointmentsPatientsComponent } from './views/patients/appointments-patients/appointments-patients.component';
import { NewMedicalHistoryComponent } from './views/doctors/new-medical-history/new-medical-history.component';
import { ProfileDoctorComponent } from './views/doctors/profile-doctor/profile-doctor.component';
import { EditProfileDoctorComponent } from './views/doctors/edit-profile-doctor/edit-profile-doctor.component';
import { MyReviewsComponent } from './views/doctors/my-reviews/my-reviews.component';
import { NewsDoctorsComponent } from './views/doctors/news-doctors/news-doctors.component';
import { NewsDoctorsDetailsComponent } from './views/doctors/news-doctors-details/news-doctors-details.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    LogInComponent,
    DoctorCardComponent,
    ReviewComponent,
    SidebarComponent,
    LogInCardComponent,
    ProfileButtonComponent,
    DashButtonComponent,
    DashboardComponent,
    ListDoctorsComponent,
    DoctorProfileComponent,
    DoctorReviewsComponent,
    NewReviewToDoctorComponent,
    DoctorDateComponent,
    PaymentComponent,
    GoPaymentComponent,
    PopupComponent,
    NewCardComponent,
    ListNewsComponent,
    MoreInfoNewsComponent,
    MedicalHistoryComponent,
    ListPrescriptionComponent,
    PrescriptionComponent,
    ProfileComponent,
    EditProfileComponent,
    LogInDoctorComponent,
    MedicalHistoryListComponent,
    PatientCardComponent,
    MedicalHistoryPatientComponent,
    AppointmentsComponent,
    PatientDateCardComponent,
    DashboardDoctorComponent,
    SidebarDoctorComponent,
    AppointmentsPatientsComponent,
    NewMedicalHistoryComponent,
    ProfileDoctorComponent,
    EditProfileDoctorComponent,
    MyReviewsComponent,
    NewsDoctorsComponent,
    NewsDoctorsDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    HttpClientModule,
    MatListModule,
    MatSidenavModule,
    NgOptimizedImage,
    MatCheckboxModule,
    MatSliderModule,
    FlexLayoutModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatTableModule,
    MatSelectModule,
    MatSortModule
  ],

  providers: [SourcesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
