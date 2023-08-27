import { Component } from '@angular/core';
import { Item } from './item';
import { MatSelect, MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo';

  filter: 'all' | 'active' | 'done' = 'all';

  allItems = [
    { description: 'eat', done: true },
    { description: 'sleep', done: false },
    { description: 'play', done: false },
    { description: 'laugh', done: false },
  ];

  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === 'done' ? item.done : !item.done
    );
  }

  addItem(description: string) {
    this.allItems.unshift({
      description,
      done: false,
    });
  }

  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }

  test(event: MatSelectChange) {
    const { value } = event;
    this.filter = value;
  }
}
