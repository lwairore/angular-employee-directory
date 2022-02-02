import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(
    private __httpClient: HttpClient
  ) { }

  addPerson$(name, age) {
    const url = `${environment.API}/users`;

    return this.__httpClient.post(url, { name, age });
  }
}
