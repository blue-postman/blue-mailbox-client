import { Injectable } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import { add_request, card_search, card_view_info, find_test, login_social, my_info, select_main, select_write_card, write_card_list, write_to_card } from './queries';

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

  public async card_view_info(card_idx){
    try {
      const result: any = await this.apollo
      .query({
        query: card_view_info,
        variables: {
          card_idx
        }
      })
      .toPromise();
    return result.data.card_view_info;
    } catch (err) {
        alert(err)
    }
  }

  public async card_search(card_keyword: string){
    try {
      const result: any = await this.apollo
      .query({
        query: card_search,
        variables: {
          card_keyword
        }
      })
      .toPromise();
    return result.data.card_search;
    } catch (err) {
        alert(err)
    }
  }

  public async write_to_card(data){
    try {
      const result: any = await this.apollo
      .mutate({
        mutation: write_to_card,
        variables: {
          data
        }
      })
      .toPromise();
    return result.data.write_to_card;
    } catch (err) {
        alert(err)
    }
  }

  public async select_write_card(card_send_code: string){
    try {
      const result: any = await this.apollo
      .query({
        query: select_write_card,
        variables: {
          card_send_code
        }
      })
      .toPromise();
    return result.data.select_write_card;
    } catch (err) {
        alert(err)
    }
  }

  public async write_card_list(){
    try {
      const result: any = await this.apollo
      .query({
        query: write_card_list
      })
      .toPromise();
    return result.data.write_card_list;
    } catch (err) {
        alert(err)
    }
  }

  public async add_request(data){
    try {
      const result: any = await this.apollo
      .mutate({
        mutation: add_request,
        variables: {
          data
        }
      })
      .toPromise();
    return result.data.add_request;
    } catch (err) {
        alert(err)
    }
  }
  
  
}