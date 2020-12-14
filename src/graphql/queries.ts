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
      user_idx
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

export const card_view_info = gql`
query card_view_info($card_idx: Float!){
  card_view_info(card_idx: $card_idx){
    card_idx
    card_title
    card_describe
    card_img_url
  }
}
`;

export const card_search = gql`
query card_search($card_keyword: String!){
  card_search(card_keyword: $card_keyword){
    card_idx
    card_title
    card_describe
    card_img_url
    card_keyword
  }
}
`;

export const write_to_card = gql`
mutation write_to_card($data: InputWriteCard!){
  write_to_card(data: $data){
    card_send_code
    card_img_url
    user_name
    card_title
  }
}
`;


export const select_write_card = gql`
query select_write_card($card_send_code: String!){
  select_write_card(card_send_code: $card_send_code){
    user_name
    card_img_url
    card_title
    card_contents
    card_font
  }
}
`;



export const write_card_list = gql`
query write_card_list{
  write_card_list{
    card_send_code
    user_name
    card_img_url
    card_title
    card_contents
    card_font
    card_idx
  }
}
`;


