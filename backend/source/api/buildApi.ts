import express, {Express} from 'express';
import cors from 'cors';
import session from 'express-session';
import { redis } from '../database/redis';
import { RedisStore } from 'connect-redis';


export const buildApi = (RedisStore: RedisStore): Express => {
    const app = express();

    app.use(cors({credentials:true, origin:'http://localhost:3000'}));
    
    app.use(session({
        store: new RedisStore({client: redis as any}),
        name: "rdscookie",
        secret: "SESSION_SECRET_COOKIE",
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 1000*60*60*24*365*7
        },
    }));

    return app;
}