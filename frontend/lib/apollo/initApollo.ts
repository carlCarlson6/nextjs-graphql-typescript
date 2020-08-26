import { ApolloClient, NormalizedCacheObject } from 'apollo-boost'
import { isBrowser } from './utils/isBrowser';

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

if(!isBrowser) {
    (global as any).fetch = fetch;
}