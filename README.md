# sleeper_fantasy
JavaScript wrapper for the sleeper fantasy football API.

[API's Documentation](https://github.com/facebook/react/wiki/Sites-Using-React)
# Install
```npm install --save sleeper_fantasy```
# Reference
### User Class Examples:
```javascript
const sleeper_package = require('sleeper_fantasy');
const fs = require('fs');

(async () => {
    const sleeper_instance = new sleeper_package.sleeper();
    sleeper_instance.user = `bladeis1`;
    await sleeper_instance.user._response;
    console.log(sleeper_instance.user._info);
    await sleeper_instance.user.avatar(sleeper_instance.user._info.avatar);
    fs.writeFile(`${sleeper_instance.user.name}.png`, sleeper_instance.user._avatar, 'binary', (err) => {
        if (err) {
            throw err
        }
    });
    await sleeper_instance.user.leagues(2020);
    console.log(sleeper_instance.user._leagues[0]);
    await sleeper_instance.user.draft(2020);
    console.log(sleeper_instance.user._draft);
})();
```
### League Class Examples:
```javascript
const sleeper_package = require('sleeper_fantasy');
const fs = require('fs');

(async () => {
    const sleeper_instance = new sleeper_package.sleeper();

    sleeper_instance.league = `507414218714144768`;
    await sleeper_instance.league._response;
    console.log(sleeper_instance.league._info);
    await sleeper_instance.league.rosters();
    console.log(sleeper_instance.league._rosters);
    await sleeper_instance.league.owners();
    console.log(sleeper_instance.league._owners);
    await sleeper_instance.league.matchups(1);
    console.log(sleeper_instance.league._matchups);
    await sleeper_instance.league.playoffs();
    console.log(sleeper_instance.league._playoffs);
    await sleeper_instance.league.transactions(1);
    console.log(sleeper_instance.league._transactions);
    await sleeper_instance.league.traded_picks();
    console.log(sleeper_instance.league._traded_picks);
    await sleeper_instance.league.drafts();
    console.log(sleeper_instance.league._drafts[0]);
})();
```
### Draft Class Examples:
```javascript
import { sleeper } from '../index';

(async () => {
    const sleeper_instance = new sleeper_package.sleeper();

    sleeper_instance.draft = `507414222434492416`;
    await sleeper_instance.draft._response;
    console.log(sleeper_instance.draft._info);
    await sleeper_instance.draft.picks();
    console.log(sleeper_instance.draft._picks);
})();
```
### Player Class Examples:
```javascript
const fs = require('fs');
import { sleeper } from '../index';

(async () => {
    const sleeper_instance = new sleeper_package.sleeper();
    await sleeper_instance.player.all_players();
    fs.writeFile('players.json', JSON.stringify(sleeper_instance.player._players), 'utf8', (err) => {
        if (err) {
            throw err
        }
    });
    await sleeper_instance.player.trending('add');
    console.log(sleeper_instance.player._add);
    await sleeper_instance.player.trending('drop');
    console.log(sleeper_instance.player._drop);
    await sleeper_instance.player.stats('regular', 2020, 1);
    console.log(sleeper_instance.player._stats);
    await sleeper_instance.player.projections('regular', 2020, 1);
    console.log(sleeper_instance.player._projections);
})();
```