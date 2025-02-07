import { Component, OnInit  } from '@angular/core';
import { RandomQuote } from '../../models/random-quotes.model';
import { GetRandomQuotesService } from '../../services/get-random-quotes.service';

@Component({
  selector: 'app-random-quotes',
  templateUrl: './random-quotes.component.html',
  styleUrls: ['./random-quotes.component.scss']
})
export class RandomQuotesComponent implements OnInit  {

  qoute!: RandomQuote;

  constructor(private getRandomQuotesService: GetRandomQuotesService) { }

  ngOnInit(): void {
    this.getRandomQuotesService.getRandomQuote().subscribe((value) => {
      return this.qoute = value[0];
    })
  }

  onClick(): void {
    this.getRandomQuotesService.getRandomQuote().subscribe((value) => {
      return this.qoute = value[0];
    })
  }

}
