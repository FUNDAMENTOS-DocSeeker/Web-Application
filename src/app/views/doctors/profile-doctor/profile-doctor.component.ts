import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SourcesService } from "../../../services/sources.service";
import { DoctorResource } from "../../../interfaces/doctor-resource";

@Component({
  selector: 'app-profile-doctor',
  templateUrl: './profile-doctor.component.html',
  styleUrls: ['./profile-doctor.component.css']
})
export class ProfileDoctorComponent {
  allreviews: Array<any> = [];
  reviewsToDoctor: Array<any> = [];
  doctor: any;
  id="" ;
  currentDoctor: DoctorResource = {} as DoctorResource;
  promedioCustomerScore: number = 0;
  constructor(private route: ActivatedRoute, private newsSource: SourcesService) {
  }
  calcularPromedioCustomerScore(reviews: any[]): number {
    if (reviews.length === 0) {
      return 0; // No hay revisiones para ese doctor, retorna 0 como promedio.
    }

    const totalCustomerScore = reviews.reduce((sum, review) => sum + review.customerScore, 0);
    const promedio = totalCustomerScore / reviews.length;

    return promedio;
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    let doctor: string | null = localStorage.getItem('currentDoctor');

    if (doctor) {
      this.currentDoctor = JSON.parse(doctor);
      console.log(this.currentDoctor);
    }
  }
}
