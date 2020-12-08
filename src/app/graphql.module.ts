import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { environment } from '../environments/environment';
import { createUploadLink } from 'apollo-upload-client';
import { ApolloLink } from 'apollo-link';

const uri = environment.api_server_url + '/graphql';
const uploadLink = new createUploadLink({ uri: uri });

export function createApollo(httpLink: HttpLink) {
  const link = ApolloLink.split((operation) => operation.getContext().hasUpload, uploadLink, httpLink.create({ uri }));

  return {
    link: link,
    cache: new InMemoryCache({
      addTypename: false
    }),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'no-cache',
        errorPloicy: 'all'  
      },
      query: {
        fetchPolicy: 'no-cache',
        errorPloicy: 'all'
      }
    }
  };
}

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink]
    }
  ]
})
export class GraphQLModule {}
