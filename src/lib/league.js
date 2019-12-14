import { util } from './util';

export const league = class extends util {
    constructor (league_id) {
        // league_id is defined
        if(league_id) {
            super();
            this._league_id = league_id;
            this._response = this._request(`https://api.sleeper.app/v1/league/${this._league_id}`, `_info`);
        }
    }

    // get league
    get league () {
        return this._league_id;
    }

    // set name
    set league (league_id) {
        this._league_id = league_id;
        this._league_id = this._request(`https://api.sleeper.app/v1/user/${this._league_id}`, `_info`);
    }

    // get rosters
    async fetch_rosters () {
        if(this._rosters) {
            return this._rosters;
        }
        // request rosters data
        return this._request(`https://api.sleeper.app/v1/league/${this._league_id}/rosters`, `rosters`);
    }

    // get owners
    async fetch_owners () {
        if(this._owners) {
            return this._owners;
        }
        // request rosters data
        return this._request(`https://api.sleeper.app/v1/league/${this._league_id}/users`, `owners`);
    }

    // get matchups
    async fetch_matchups (week) {
        // request matchup data
        return this._request(`https://api.sleeper.app/v1/league/${this._league_id}/matchups/${week}`, `matchups`);
    }

    // get playoffs
    async fetch_playoffs () {
        if(this._playoffs) {
            return this._playoffs;
        }
        // request matchup data
        return this._request(`https://api.sleeper.app/v1/league/${this._league_id}/winners_bracket`, `playoffs`);
    }

    // get transactions
    async fetch_transactions (week) {
        // request matchup data
        return this._request(`https://api.sleeper.app/v1/league/${this._league_id}/transactions/${week}`, `transactions`);
    }

    // get traded picks
    async fetch_traded_picks () {
        if(this._traded_picks) {
            return this._traded_picks;
        }
        // request matchup data
        return this._request(`https://api.sleeper.app/v1/league/${this._league_id}/traded_picks`, `traded_picks`);
    }

    // get drafts
    async fetch_drafts () {
        // request matchup data
        return this._request(`https://api.sleeper.app/v1/league/${this._league_id}/drafts`, `drafts`);
    }
}