import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PeopleService } from './people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  private _addPersonSubscription: Subscription;

  constructor(private _peopleService: PeopleService) { }

  ngOnInit() { }

  ngOnDestroy() { }

  private _unsubscribeAddPersonSubscription() {
    if (this._addPersonSubscription instanceof Subscription) {
      this._addPersonSubscription.unsubscribe();
    }
  }
}
