import { Component } from '@angular/core';
import { RandomQuote } from '../../models/random-quotes.model';
import { GetRandomQuotesService } from '../../services/get-random-quotes.service';

@Component({
  selector: 'app-random-quotes',
  templateUrl: './random-quotes.component.html',
  styleUrls: ['./random-quotes.component.scss']
})
export class RandomQuotesComponent {

  qoute: RandomQuote = {
    q: "Click button to get Quotes!!",
    a: "ZenQuotes",
    h: ''
  };

  constructor(private getRandomQuotesService: GetRandomQuotesService) { }

  onClick(): void {
    this.getRandomQuotesService.getRandomQuote().subscribe((value) => {
      return this.qoute = value[0];
    })
  }

}
