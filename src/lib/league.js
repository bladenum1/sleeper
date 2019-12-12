const request = require(`request`);

export const league = class {
    constructor (league_id) {
        // league_id is defined
        if(league_id) {
            this._league_id = league_id;
            this._response = this._request(`https://api.sleeper.app/v1/league/${this._league_id}`, `_info`);
        }
    }

    // get league
    get league () {
        return this._league_id;
    }

    // set name
    set name (league_id) {
        this._league_id = league_id;
        this._league_id = this._request(`https://api.sleeper.app/v1/user/${this._league_id}`, `_info`);
    }

    // get rosters
    async rosters () {
        if(this._rosters) {
            return this._rosters;
        }
        // request rosters data
        return this._request(`https://api.sleeper.app/v1/league/${this._league_id}/rosters`, `_rosters`);
    }

    // get owners
    async owners () {
        if(this._owners) {
            return this._owners;
        }
        // request rosters data
        return this._request(`https://api.sleeper.app/v1/league/${this._league_id}/users`, `_owners`);
    }

    // get matchups
    async matchups (week) {
        // request matchup data
        return this._request(`https://api.sleeper.app/v1/league/${this._league_id}/matchups/${week}`, `_matchups`);
    }

    // get playoffs
    async playoffs () {
        if(this._playoffs) {
            return this._playoffs;
        }
        // request matchup data
        return this._request(`https://api.sleeper.app/v1/league/${this._league_id}/winners_bracket`, `_playoffs`);
    }

    // get transactions
    async transactions (week) {
        // request matchup data
        return this._request(`https://api.sleeper.app/v1/league/${this._league_id}/transactions/${week}`, `_transactions`);
    }

    // get traded picks
    async traded_picks () {
        if(this._traded_picks) {
            return this._traded_picks;
        }
        // request matchup data
        return this._request(`https://api.sleeper.app/v1/league/${this._league_id}/traded_picks`, `_traded_picks`);
    }

    // get drafts
    async drafts () {
        // request matchup data
        return this._request(`https://api.sleeper.app/v1/league/${this._league_id}/drafts`, `_drafts`);
    }


    // request user api
    async _request (url, key) {
        // request user_name data
        return new Promise ((resolve,reject) => {
            let settings = {
                url: url,
                method: `GET`
            };

            // set encoding to null for images so we don`t cast it to a string
            if (key === `_avatar`) {
                settings.encoding = null;
            }

            request(settings, (error, response, body) => {
                // error reject
                if (error) {
                    reject(error);
                }
                // no body reject
                if (!body) {
                    reject(new Error(`user not found`));
                }
                // found user
                try {
                    this[key] = JSON.parse(body);
                    resolve(JSON.parse(body));
                } catch {
                    this[key] = body;
                    resolve(body);
                }
            });
        });
    }
}