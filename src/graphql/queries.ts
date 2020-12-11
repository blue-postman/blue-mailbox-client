import gql from 'graphql-tag';

export const find_test = gql`
    query{
        find_test(table_idx: 1){
            test_idx,
            test_name
        }
    }
`;

export const login_social = gql`
  mutation login_social($social_id: String!, $social_access_token: String!) {
    login_social(social_id: $social_id, social_access_token: $social_access_token)
  }
`;

export const my_info = gql`
query{
    my_info{
      user_name
    }
  }
`;

export const select_main = gql`
query{
  select_main{
		main_img{
      card_idx
      card_img_url
    },
    card_list_pop{
      card_idx
      card_img_url
    }
    card_list_christmas{
      card_idx
      card_img_url
    }

  }
}
`;


