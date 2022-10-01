import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';

@Component({
  selector: 'app-posts-filter',
  templateUrl: './posts-filter.component.html',
  styleUrls: ['./posts-filter.component.scss'],
})
export class PostsFilterComponent implements OnInit {
  filterTextChanged = new Subject<string>();
  @Output() onFilter = new EventEmitter();

  ngOnInit() {
    this.subscribeToKeyupEvent();
  }

  subscribeToKeyupEvent() {
    // we should unsubscribe but our app is only one page

    // debounce to reduce redundant API calls
    this.filterTextChanged
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe((filterKey) => {
        this.onFilter.emit(filterKey);
      });
  }

  onTypeInFilter(event: KeyboardEvent) {
    this.filterTextChanged.next((event.target as HTMLInputElement).value);
  }
}
