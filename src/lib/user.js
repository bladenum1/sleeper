const request = require(`request`);

export const user = class {
    constructor (name) {
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
    async avatar (avatar_id) {
        // request avatar data
        return this._request(`https://sleepercdn.com/avatars/${avatar_id}`, `_avatar`);
    }

    // get leagues
    async leagues (year, sport) {
        if (!sport) {
            sport = `nfl`;
        }
        // request avatar data
        return this._request(`https://api.sleeper.app/v1/user/${this._info.user_id}/leagues/${sport}/${year}`, `_leagues`);
    }

    // get draft
    async draft (year, sport) {
        if (!sport) {
            sport = `nfl`;
        }
        // request matchup data
        return this._request(`https://api.sleeper.app/v1/user/${this._info.user_id}/drafts/${sport}/${year}`, `_draft`);
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