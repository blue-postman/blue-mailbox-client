import gql from 'graphql-tag';

export const find_test = gql`
    query{
        find_test(table_idx: 1){
            test_idx,
            test_name
        }
    }
`