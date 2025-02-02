import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/models/quote.model';
import { HomePageService } from 'src/app/service/home-page.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{
  posts!: Quote[];

  constructor(private homePageService: HomePageService) {}

  ngOnInit(): void {
    this.homePageService.getAllQuotes().subscribe(
      {
        next: (data) => {
          this.posts = data;
        },
        error: (err) => {
          console.log("In HomePageComponent: ", err);
        }
      }
    );
  }
}
