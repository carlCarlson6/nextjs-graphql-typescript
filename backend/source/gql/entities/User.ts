import { ObjectType, Field, ID, Root } from "type-graphql";
import {IUser} from '../../core/models/IUser'

@ObjectType()
export class User implements IUser {
    
    @Field(() => ID)
    id: number;

    @Field()
    firstName: string;

    @Field()
    lastName: string;

    @Field()
    email: string;

    @Field()
    name(@Root() parent: User): string {
        return `${parent.firstName} ${parent.lastName}`;
    }

    password: string;
    confirmed: boolean;
}