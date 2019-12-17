# sleeper_fantasy 
JavaScript wrapper for the sleeper fantasy football API.

[API's Documentation](https://docs.sleeper.app)
# Install
```npm install --save sleeper_fantasy```
# Reference
### User Class Examples:
```javascript
const sleeper_package = require('sleeper_fantasy');
const fs = require('fs');

(async () => {
    const sleeper_instance = new sleeper_package.sleeper();
    const usernames = [`bladeis1`];

    sleeper_instance.users = usernames;
    await Promise.all(sleeper_instance.user_promises);
    console.log(sleeper_instance.users);
    await sleeper_instance.users[usernames[0]].fetch_avatar(sleeper_instance.users[usernames[0]].avatar);
    console.log(sleeper_instance.users[usernames[0]].avatar_buffer);
    fs.writeFile(`${sleeper_instance.users[usernames[0]].name}.png`, sleeper_instance.users[usernames[0]].avatar_buffer, 'binary', (err) => {
        if (err) {
            throw err
        }
    });
    await sleeper_instance.users[usernames[0]].fetch_leagues(2020);
    console.log(sleeper_instance.users[usernames[0]].leagues);
    await sleeper_instance.users[usernames[0]].fetch_drafts(2020);
    console.log(sleeper_instance.users[usernames[0]].drafts);
})();
```
### League Class Examples:
```javascript
const sleeper_package = require('sleeper_fantasy');
const fs = require('fs');

(async () => {
    const sleeper_instance = new sleeper_package.sleeper();
    const league_ids = [`507414218714144768`];

    sleeper_instance.leagues = league_ids;
    await Promise.all(sleeper_instance.league_promises);
    console.log(inst);
    await sleeper_instance.leagues[league_ids[0]].fetch_rosters();
    console.log(sleeper_instance.leagues[league_ids[0]].rosters);
    await sleeper_instance.leagues[league_ids[0]].fetch_owners();
    console.log(sleeper_instance.leagues[league_ids[0]].owners);
    await sleeper_instance.leagues[league_ids[0]].fetch_matchups(1);
    console.log(sleeper_instance.leagues[league_ids[0]].matchups);
    await sleeper_instance.leagues[league_ids[0]].fetch_playoffs();
    console.log(sleeper_instance.leagues[league_ids[0]].playoffs);
    await sleeper_instance.leagues[league_ids[0]].fetch_transactions(1);
    console.log(sleeper_instance.leagues[league_ids[0]].transactions);
    await sleeper_instance.leagues[league_ids[0]].fetch_traded_picks();
    console.log(sleeper_instance.leagues[league_ids[0]].traded_picks);
    await sleeper_instance.leagues[league_ids[0]].fetch_drafts();
    console.log(sleeper_instance.leagues[league_ids[0]].drafts[0]);
})();
```
### Draft Class Examples:
```javascript
const sleeper_package = require('sleeper_fantasy');

(async () => {
    const sleeper_instance = new sleeper_package.sleeper();
    const draft_ids = [`507414222434492416`];

    sleeper_instance.drafts = draft_ids;
    await Promise.all(sleeper_instance.draft_promises);
    console.log(sleeper_instance.drafts[draft_ids[0]]);
    await sleeper_instance.drafts[draft_ids[0]].picks();
    console.log(sleeper_instance.drafts[draft_ids[0]]._picks);
})();
```
### Player Class Examples:
```javascript
const sleeper_package = require('sleeper_fantasy');
const fs = require('fs');

(async () => {
    const sleeper_instance = new sleeper_package.sleeper();
    await sleeper_instance.players.fetch_all_players();
    fs.writeFile('players.json', JSON.stringify(sleeper_instance.players.all_players), 'utf8', (err) => {
        if (err) {
            throw err
        }
    });
    await sleeper_instance.players.fetch_trending('add');
    console.log(sleeper_instance.players.add);
    await sleeper_instance.players.fetch_trending('drop');
    console.log(sleeper_instance.players.drop);
    await sleeper_instance.players.fetch_stats('regular', 2020, 1);
    console.log(sleeper_instance.players.stats);
    await sleeper_instance.players.fetch_projections('regular', 2020, 1);
    console.log(sleeper_instance.players.projections);
})();
```