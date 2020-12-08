import { Injectable } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import { find_test } from './queries';

@Injectable({
    providedIn: 'root'
})

export class DataService {
    constructor(private apollo: Apollo) { }

    public async find_test() {
        try {
          const result: any = await this.apollo
            .query({
              query: find_test,
            })
            .toPromise();
    
          return result.data.find_test;
        } catch (err) {
            alert(err)
        }
      }
}