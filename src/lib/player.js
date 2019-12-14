import { util } from './util';

export const player = class extends util {
    constructor () {
        super();
    }

    // all players
    async fetch_all_players () {
        // request stats data
        return this._request(`https://api.sleeper.app/v1/players/nfl`, `all_players`, true);
    }

    // trending players
    async fetch_trending (type, lookback_hours, limit, sport) {
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
        return this._request(url, `${type}`);
    }

    // stats players
    async fetch_stats (season_type, year, week, sport) {
        if (!sport) {
            sport = 'nfl'
        }
        let url = `https://api.sleeper.app/v1/stats/${sport}/${season_type}/${year}`
        if (week) {
            url += `/${week}`;
        }
        // request stats data
        return this._request(url, `stats`, true);
    }

    // projections players
    async fetch_projections (season_type, year, week, sport) {
        if (!sport) {
            sport = 'nfl'
        }
        let url = `https://api.sleeper.app/v1/projections/${sport}/${season_type}/${year}`
        if (week) {
            url += `/${week}`;
        }
        // request projections data
        return this._request(url, `projections`, true);
    }
}