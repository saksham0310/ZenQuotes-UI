import { Component, Input } from '@angular/core';
import { Quote } from 'src/app/features/quotes/models/quote.model';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent {
  @Input()
  post!:Quote;
}
