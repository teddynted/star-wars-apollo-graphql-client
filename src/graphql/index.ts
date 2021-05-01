import gql from 'graphql-tag';

export const GET_PEOPLE = gql`
    query getPeople($page: Int!) {
        people(page: $page) {
            name
            height
            mass
            gender
            homeworld
        }
    }
`;

export const GET_PERSON = gql`
    query getPerson($personName: String!) {
        person(name: $personName) {
            name
            height
            mass
            gender
            homeworld
        }
    }
`;