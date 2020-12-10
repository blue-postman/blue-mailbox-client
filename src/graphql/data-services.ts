import { Injectable } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import { find_test, login_social } from './queries';

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

    public async login_social(social_id, social_access_token){
      try {
        const result: any = await this.apollo
        .mutate({
          mutation: login_social,
          variables: {
            social_id,
            social_access_token
          }
        })
        .toPromise();
      return result.data.login_social;
      } catch (err) {
          alert(err)
      }
    }
}