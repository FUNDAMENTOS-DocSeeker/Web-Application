import {Component, OnInit} from '@angular/core';
import {map, Observable, shareReplay} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {ActivatedRoute, Router} from "@angular/router";
import {SourcesService} from "../../../services/sources.service";
import {ReviewsService} from "../../../services/reviews.service";
@Component({
  selector: 'app-my-reviews',
  templateUrl: './my-reviews.component.html',
  styleUrls: ['./my-reviews.component.css']
})
export class MyReviewsComponent implements OnInit{
//CONNECTING TO FAKEAPI
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  doctors: Array<any> = [];
  allreviews: Array<any> = [];
  reviewsToDoctor: Array<any> = [];
  currentDoctor: any;

  constructor(private route: ActivatedRoute, private breakpointObserver: BreakpointObserver, private reviewSource: ReviewsService , private newsSource: SourcesService, private router: Router) {}

  ngOnInit() {
    this.currentDoctor = localStorage.getItem('currentDoctor');
    if (this.currentDoctor) {
      this.currentDoctor = JSON.parse(this.currentDoctor);
    }
    this.reviewSource.getByDoctorId(Number(this.currentDoctor.id)).subscribe((data: any): void =>{
      this.reviewsToDoctor = data
      console.log("Sources: ", this.reviewsToDoctor);

    })
  }
}
