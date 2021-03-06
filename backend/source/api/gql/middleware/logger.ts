import { MiddlewareFn } from "type-graphql";
import { MyContext } from "../../../common/types/MyContext";

export const logger: MiddlewareFn<MyContext> = async ({ args }, next) => {
    console.log('loggin the args:', args);
    return next();
}