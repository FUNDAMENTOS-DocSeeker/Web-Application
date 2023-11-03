import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Prescriptions} from "../../../interfaces/prescriptions";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {PrescriptionsService} from "../../../services/prescriptions.service";


@Component({
  selector: 'app-list-prescription',
  templateUrl: './list-prescription.component.html',
  styleUrls: ['./list-prescription.component.css']
})
export class ListPrescriptionComponent implements OnInit, AfterViewInit{

  prescriptionData !: Prescriptions;
  dataSource !: MatTableDataSource<any>;
  currentPatient: any;
  displayedColumns: string[] = ['id','date' ,'doctorName','action'];

  @ViewChild(MatPaginator, { static: true }) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private prescriptionService: PrescriptionsService) {
    this.dataSource = new MatTableDataSource<any>();
  }

  ngOnInit() {
    this.currentPatient = localStorage.getItem('currentPatient');
    if (this.currentPatient) {
      this.currentPatient = JSON.parse(this.currentPatient);
    }

    this.getAllPrescriptions();
    this.dataSource.paginator = this.paginator;
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  getAllPrescriptions() {
    this.prescriptionService.getAll().subscribe((response: any) => {
      this.dataSource.data = response
        .filter((prescription: any) => prescription.patientId == this.currentPatient.id)
        .map((prescription: any) => {
          const doctor = this.prescriptionService.getDoctorById(prescription.doctorId).subscribe((doctorData: any) => {
            prescription.doctorName = doctorData.name;
          });
          return prescription;
        });
      console.log(response);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
