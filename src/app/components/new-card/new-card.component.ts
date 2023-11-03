import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.css']
})
export class NewCardComponent {

  @Input() id!:number;
  @Input() imageNews!:string;
  @Input() title!:string;
  @Input() description!:string;
}
