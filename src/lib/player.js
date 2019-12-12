const request = require(`request`);

export const player = class {
    constructor () {
    }

    // all players
    async all_players () {
        // request stats data
        return this._request(`https://api.sleeper.app/v1/players/nfl`, `_players`);
    }

    // trending players
    async trending (type, lookback_hours, limit, sport) {
        if (!sport) {
            sport = 'nfl'
        }
        let url = `https://api.sleeper.app/v1/players/${sport}/trending/${type}`
        if (lookback_hours || limit) {
            url += `?`;
        }
        if (lookback_hours) {
            url += `lookback_hours=${lookback_hours}${limit ? `&` : ``}`;
        }
        if (limit) {
            url += `limit=${limit}`;
        }
        // request trending data
        return this._request(url, `_${type}`);
    }

    // stats players
    async stats (season_type, year, week, sport) {
        if (!sport) {
            sport = 'nfl'
        }
        let url = `https://api.sleeper.app/v1/stats/${sport}/${season_type}/${year}`
        if (week) {
            url += `/${week}`;
        }
        // request stats data
        return this._request(url, `_stats`);
    }

    // projections players
    async projections (season_type, year, week, sport) {
        if (!sport) {
            sport = 'nfl'
        }
        let url = `https://api.sleeper.app/v1/projections/${sport}/${season_type}/${year}`
        if (week) {
            url += `/${week}`;
        }
        // request projections data
        return this._request(url, `_projections`);
    }

    // request user api
    async _request (url, key) {
        // request
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