import {Component, OnInit} from '@angular/core';
import {SourcesService} from "../../../services/sources.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  currentPatient: any;
  constructor() {
  }
  ngOnInit() {
    this.currentPatient = localStorage.getItem('currentPatient');
    if (this.currentPatient){
      this.currentPatient = JSON.parse(this.currentPatient);
    }
    console.log("User logged: ", this.currentPatient);
  }

}
