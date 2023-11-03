import {Component, OnInit} from '@angular/core';
import {NewsService} from "../../../services/news.service";

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.css']
})
export class ListNewsComponent implements OnInit{

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
