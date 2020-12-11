import { Injectable } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import { find_test, login_social, my_info, select_main } from './queries';

@Injectable({
    providedIn: 'root'
})

export class DataService {
    constructor(private apollo: Apollo) { }

    public async my_info() {
        try {
          const result: any = await this.apollo
            .query({
              query: my_info,
            })
            .toPromise();
    
          return result.data.my_info;
        } catch (err) {
            alert(err)
        }
    }

    public async select_main() {
      try {
        const result: any = await this.apollo
          .query({
            query: select_main,
          })
          .toPromise();
  
        return result.data.select_main;
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