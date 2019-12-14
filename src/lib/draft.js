import { util } from './util';

export const draft = class extends util {
    constructor (draft_id) {
        // draft_id is defined
        if(draft_id) {
            super();
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
}