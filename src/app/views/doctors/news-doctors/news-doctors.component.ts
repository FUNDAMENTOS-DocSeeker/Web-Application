import {Component, OnInit} from '@angular/core';
import {NewsService} from "../../../services/news.service";

@Component({
  selector: 'app-news-doctors',
  templateUrl: './news-doctors.component.html',
  styleUrls: ['./news-doctors.component.css']
})
export class NewsDoctorsComponent implements OnInit{

  newsList: Array<any> = [];

  ngOnInit() {
    this.getAllNews();
  }

  constructor(private newsService: NewsService) {
  }

  getAllNews(){
    this.newsService.getAll()
      .subscribe((response:any)=>{
        console.log(response);
        this.newsList= response;
      })
  }


}
