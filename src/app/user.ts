import { IUser } from "./user-interface";

export class User implements IUser {
    constructor(public name, public address, public email, public phone,public username) { }
}