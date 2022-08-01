import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  ratings: {name:string, content:string, rate:number}[] = [
    {
      name: "test",
      content: "test",
      rate: 1
    },

    {
      name: "test",
      content: "test",
      rate: 2
    },

    {
      name: "test",
      content: "test",
      rate: 4
    },
    {
      name: "test",
      content: "test",
      rate: 4
    },
  ]
}
