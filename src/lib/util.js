const request = require(`request`);

export const util = class {
    constructor () {
    }

    // retrieves the value of key
    async value_of(key) {
        try {
            return this[key];
        } catch (e) {
            return new Error('Could not retrieve value of: ' + key);
        }
    }
    
    // request user api
    async _request (url, key, override) {
        // request user_name data
        return new Promise ((resolve,reject) => {
            let settings = {
                url: url,
                method: `GET`
            };
            // set encoding to null for images so we don`t cast it to a string
            if (key === `avatar_buffer`) {
                settings.encoding = null;
            }
            request(settings, (error, response, body) => {
                // error reject
                if (error) {
                    reject(error);
                    return;
                }
                // no body reject
                if (!body) {
                    reject(new Error(`user not found`));
                    return;
                }
                // found user
                try {
                    if(override || Buffer.isBuffer(body) || body === `null`) {
                        try {
                            this[key] = JSON.parse(body);
                        } catch {
                            this[key] = body;
                        }
                        resolve(this);
                        return;
                    }
                    const response = JSON.parse(body);
                    if(Array.isArray(response)) {
                        this[key] = response;
                    } else {
                        const keys = Object.keys(response);
                        for (let i = 0; i < keys.length; i++) {
                            this[keys[i]] = response[keys[i]];
                        }
                    }
                    resolve(this);
                } catch (e){
                    reject(body);
                }
            });
        });
    }
}