const fs = require('fs');
import { sleeper } from '../index';

(async () => {
    const inst = new sleeper();
    await inst.players.fetch_all_players();
    fs.writeFile('players.json', JSON.stringify(inst.players.all_players), 'utf8', (err) => {
        if (err) {
            throw err
        }
    });
    await inst.players.fetch_trending('add');
    console.log(inst.players.add);
    await inst.players.fetch_trending('drop');
    console.log(inst.players.drop);
    await inst.players.fetch_stats('regular', 2020, 1);
    console.log(inst.players.stats);
    await inst.players.fetch_projections('regular', 2020, 1);
    console.log(inst.players.projections);
})();