import { ApolloOptions } from "../models/interfaces";
import { createHttpLink } from 'apollo-link-http';

export const createApolloClient = (initialState: any, {getToken}: ApolloOptions) => {
    const httpLink = createHttpLink({
        uri: 'http://localhost:4000/graphql',
        credentials: 'include'
    })

    const authLink = setContext
}