import { user } from './lib/user';
import { league } from './lib/league';
import { draft } from './lib/draft';
import { player } from './lib/player';
import '@babel/polyfill';

export const sleeper = class {
    constructor () {
        this._users = [];
        this._leagues = [];
        this._drafts = [];
        this._players = new player();
        this.user_promises = [];
        this.league_promises = [];
        this.draft_promises = [];
    }
    get users () {
        return this._users;
    }
    set users (user_names) {
        for (let i = 0; i < user_names.length; i++) {
            this._users[user_names[i]] = new user(user_names[i]);
            this.user_promises.push(this._users[user_names[i]]._response);
        }
    }
    get leagues () {
        return this._leagues;
    }
    set leagues (league_ids) {
        for (let i = 0; i < league_ids.length; i++) {
            this._leagues[league_ids[i]] = new league(league_ids[i]);
            this.league_promises.push(this._leagues[league_ids[i]]._response);
        }
    }
    get drafts () {
        return this._drafts;
    }
    set drafts (draft_ids) {
        for (let i = 0; i < draft_ids.length; i++) {
            this._drafts[draft_ids[i]] = new draft(draft_ids[i]);
            this.draft_promises.push(this._drafts[draft_ids[i]]._response);
        }
    }
    get players () {
        return this._players;
    }
}