import { user } from './lib/user';
import { league } from './lib/league';
import { draft } from './lib/draft';
import { player } from './lib/player';

export const sleeper = class {
    constructor (user_name) {
        this._user = new user();
        this._league = new league();
        this._draft = new draft();
        this._player = new player();
    }
    get user () {
        return this._user;
    }
    set user (name) {
        this._user = new user(name);
    }
    get league () {
        return this._league;
    }
    set league (league_id) {
        this._league = new league(league_id);
    }
    get draft () {
        return this._draft;
    }
    set draft (draft_id) {
        this._draft = new draft(draft_id);
    }
    get player () {
        return this._player;
    }
}