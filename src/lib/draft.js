const request = require(`request`);

export const draft = class {
    constructor (draft_id) {
        // draft_id is defined
        if(draft_id) {
            this._draft_id = draft_id;
            this._response = this._request(`https://api.sleeper.app/v1/draft/${this._draft_id}`, `_info`);
        }
    }

    // get draft
    get draft () {
        return this._draft_id;
    }

    // set name
    set name (draft_id) {
        this._draft_id = draft_id;
        this._draft_id = this._request(`https://api.sleeper.app/v1/draft/${this._draft_id}`, `_info`);
    }

    // get picks
    async picks () {
        if(this._picks) {
            return this._picks;
        }
        // request matchup data
        return this._request(`https://api.sleeper.app/v1/draft/${this._draft_id}/picks`, `_picks`);
    }

    // get traded picks
    async traded_picks () {
        if(this._traded_picks) {
            return this._traded_picks;
        }
        // request matchup data
        return this._request(`https://api.sleeper.app/v1/draft/${this._draft_id}/traded_picks`, `_traded_picks`);
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