import { util } from './util';

export const user = class extends util {
    constructor (name) {
        super();
        // user_name is defined
        if(name) {
            this._name = name;
            this._response = this._request(`https://api.sleeper.app/v1/user/${this._name}`, `_info`);
        }
    }

    // get name
    get name () {
        return this._name;
    }

    // set name
    set name (name) {
        this._name = name;
        this._response = this._request(`https://api.sleeper.app/v1/user/${this._name}`, `_info`);
    }

    // get avatar
    async fetch_avatar (avatar_id) {
        // request avatar data
        return this._request(`https://sleepercdn.com/avatars/${avatar_id}`, `avatar_buffer`);
    }

    // get leagues
    async fetch_leagues (year, sport) {
        if (!sport) {
            sport = `nfl`;
        }
        // request avatar data
        return this._request(`https://api.sleeper.app/v1/user/${this.user_id}/leagues/${sport}/${year}`, `leagues`);
    }

    // get draft
    async fetch_drafts (year, sport) {
        if (!sport) {
            sport = `nfl`;
        }
        // request matchup data
        return this._request(`https://api.sleeper.app/v1/user/${this.user_id}/drafts/${sport}/${year}`, `drafts`);
    }
}