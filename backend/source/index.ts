import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import {Express} from 'express';
import { createConnection } from 'typeorm';
import session from 'express-session';
import connectRedis from 'connect-redis';
import { buildGqlServer } from './api/gql/buildGqlServer';
import { buildApi } from './api/buildApi';

const main = async (): Promise<void> => {
    await createConnection();
    const RedisStore = connectRedis(session);

    const app: Express = buildApi(RedisStore);

    const gqlServer: ApolloServer = await buildGqlServer();
    gqlServer.applyMiddleware({ app });

    app.listen(4000, () => console.log('server is running on localhost:4000/graphql'))
}

main();