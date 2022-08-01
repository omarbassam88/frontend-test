import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css'],
})
export class RatingsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

@Component({
  selector: 'rating',
  template: ` <div class="stars-container">
    <div *ngFor="let star of stars">
      <i class="fa fa-star" [class.filled]="star"></i>
    </div>
  </div>`,
  styles: [
    `
      .stars-container {
        display: flex;
      }
      .fa-star {
        color: transparent;
        -webkit-text-stroke: 1px #000;
      }
      .filled {
        color: black;
      }
    `,
  ],
})
export class RatingComponent implements OnInit {
  @Input() name: string = '';
  @Input() content: string = '';
  @Input() rate: number = 0;
  stars: number[] = new Array(5).fill(0);
  constructor() {}
  ngOnInit(): void {
    this.stars = this.stars.map((star, index) => (index < this.rate ? 1 : 0));
  }
}

//Average Rating
@Component({
  selector: 'average-rating',
  template: ` <div>
    <rating [rate]="average" ></rating>
  </div>`,
  styles: [``],
})
export class AverageRatingComponent implements OnInit {
  @Input() ratings: { name: string; content: string; rate: number }[] = [];
  average:number = 0;
  constructor() {}
  ngOnInit(): void {
    if (!this.ratings.length) return;
    const sum = this.ratings.reduce((acc, item) =>{
      acc += item.rate;
      return acc;
    },0)
    this.average = Math.ceil(sum/ this.ratings.length);
  }
}

@Component({
  selector: 'ratings-list',
  template: ` <div>
    <rating *ngFor="let rating of ratings" [rate]="rating.rate"> </rating>
  </div>`,
  styles: [``],
})
export class RatingsListComponent implements OnInit {
  @Input() ratings: { name: string; content: string; rate: number }[] = [];
  constructor() {}
  ngOnInit(): void {}
}
