import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import {Observable} from 'rxjs/Observable';

const QTD_PESSOAS = 20;

@Injectable()
export class PersonProvider {
  constructor(public http: Http) {
    console.log('Hello PersonProvider Provider');
  }

  getLatestPersons() {
    return new Observable(observer => {
      for (let i = 0; i < QTD_PESSOAS; i++) {
        this.http.get(`https://uinames.com/api/?ext`).subscribe((resultado) => {
          observer.next(resultado);
        });
      }
    });
  }

}
