import { user } from './lib/user';

export const sleeper = class {
    constructor (user_name) {
        this._user = new user(user_name);
    }
    get user () {
        return this._user;
    }
    set user (name) {
        this._user = user;
    }
}