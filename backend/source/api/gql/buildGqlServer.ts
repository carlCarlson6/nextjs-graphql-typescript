import { buildSchema } from 'type-graphql';
import { ConfirmUser, ForgotPassword, Login, Logout, Me, Register } from './resolvers';
import { ApolloServer } from 'apollo-server-express';
import { MyContext } from '../../common/types/MyContext';


export const buildGqlServer = async () => {
    const schema = await buildSchema({
        resolvers: [
            ConfirmUser,
            ForgotPassword,
            Login,
            Logout,
            Me,
            Register
        ]
    })

    const server = new ApolloServer({
        schema,
        context: ({req, res}): MyContext => ({req, res})
    })

    return server;
}
