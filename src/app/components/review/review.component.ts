import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {
  @Input() imageSrc = "https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg";
  @Input() namePatient = "Name test";
  @Input() reviewDescription = "Review Content";
  @Input() score = "5";

}
