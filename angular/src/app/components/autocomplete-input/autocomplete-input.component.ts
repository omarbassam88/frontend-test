import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe, Subject, of } from 'rxjs';

import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap,
  catchError,
  map,
} from 'rxjs/operators';

interface IResult {
  id: number;
  title: string;
  body: string;
  userId: number;
}

@Component({
  selector: 'autocomplete-input',
  template: `
    <div class="wrapper">
      <div class="control">
        <input
          #searchBox
          type="text"
          class="input"
          (keyup)="search(searchBox.value)"
        />
      </div>
      <div class="list is-hoverable">
        <a
          href=""
          class="list-item"
          *ngFor="let item of searchResults$ | async"
        >
          {{ item.title }}
        </a>
      </div>
    </div>
  `,
  styles: [``],
})
export class AutocompleteInputComponent implements OnInit {
  @Output() public onSelect = new EventEmitter();
  private searchTerms = new Subject<string>();
  searchResults$!: Observable<IResult[]>;
  BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.searchResults$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
      // ignore new term if same as previous term
      distinctUntilChanged(),
      // switch to new search observable each time the term changes
      switchMap((term) => (term ? this.getResults(term) : of<IResult[]>([]))),
      catchError((error) => {
        console.log('Error:', error);
        return of<IResult[]>([]);
      })
    );
  }

  getResults(term: string): Observable<IResult[]> {
    const results = this.http
      .get<IResult[]>(`${this.BASE_URL}`)
      .pipe(
        map((res: IResult[]) =>
          res.filter((item: IResult) => item.title.includes(term))
        )
      );
    return results;
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }
}
