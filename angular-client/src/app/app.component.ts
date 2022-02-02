import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PeopleService } from './people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  addPersonSubscription: Subscription;

  constructor(private _peopleService: PeopleService) { }

  ngOnInit() { }

  ngOnDestroy() {}
}
