const fs = require('fs');
import '@babel/polyfill';
import { sleeper } from '../index';

(async () => {
    const inst = new sleeper();
    await inst.player.all_players();
    fs.writeFile('players.json', JSON.stringify(inst.player._players), 'utf8', (err) => {
        if (err) {
            throw err
        }
    });
    await inst.player.trending('add');
    console.log(inst.player._add);
    await inst.player.trending('drop');
    console.log(inst.player._drop);
    await inst.player.stats('regular', 2020, 1);
    console.log(inst.player._stats);
    await inst.player.projections('regular', 2020, 1);
    console.log(inst.player._projections);
})();