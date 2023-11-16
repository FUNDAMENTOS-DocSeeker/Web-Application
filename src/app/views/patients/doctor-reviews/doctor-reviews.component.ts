import {Component, OnInit} from '@angular/core';
import {map, Observable, shareReplay} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {ActivatedRoute, Router} from "@angular/router";
import {SourcesService} from "../../../services/sources.service";
import {ReviewsService} from "../../../services/reviews.service";
import { DoctorsService } from '../../../services/doctors.service';

@Component({
  selector: 'app-doctor-reviews',
  templateUrl: './doctor-reviews.component.html',
  styleUrls: ['./doctor-reviews.component.css']
})
export class DoctorReviewsComponent implements OnInit{
//CONNECTING TO FAKEAPI
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  doctors: Array<any> = [];
  allreviews: Array<any> = [];
  reviewsToDoctor: Array<any> = [];
  doctor: any;
  id="" ;

  constructor(private route: ActivatedRoute, private breakpointObserver: BreakpointObserver, private reviewSource: ReviewsService , private DoctorsService: DoctorsService, private router: Router) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.DoctorsService.getById(this.id).subscribe((data: any): void => {
      this.doctor = data;

      console.log("Sources: ", this.doctor);
      console.log("Sources: ", this.id);

    });
    this.reviewSource.getByDoctorId(Number(this.id)).subscribe((data: any): void =>{
      this.reviewsToDoctor = data;
      console.log("Sources: ", this.reviewsToDoctor);
    })
  }
}
