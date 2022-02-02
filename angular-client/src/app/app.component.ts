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

  private _getAllPeopleSubscription: Subscription;

  constructor(private _peopleService: PeopleService) { }

  ngOnInit() { }

  ngOnDestroy() {
    this._unsubscribeAddPersonSubscription();

    this._unsubscribeGetAllPeopleSubscription();
  }

  private _unsubscribeAddPersonSubscription() {
    if (this._addPersonSubscription instanceof Subscription) {
      this._addPersonSubscription.unsubscribe();
    }
  }

  private _unsubscribeGetAllPeopleSubscription() {
    if (this._getAllPeopleSubscription instanceof Subscription) {
      this._getAllPeopleSubscription.unsubscribe();
    }
  }

  addPerson(name, age) {
    this._addPersonSubscription = this._peopleService.addPerson$(name, age)
      .subscribe(() => {
        this._getAllPeople();
      })
  }

  private _getAllPeople() {
    this._getAllPeopleSubscription = this._peopleService.getAllPeople$()
      .subscribe((people: any) => {
        console.log(people)

        this.people = people
      })
  }
}
