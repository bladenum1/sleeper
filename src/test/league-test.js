import '@babel/polyfill';
import { sleeper } from '../index';

(async () => {
    const inst = new sleeper();

    inst.league = `507414218714144768`;
    await inst.league._response;
    console.log(inst.league._info);
    await inst.league.rosters();
    console.log(inst.league._rosters);
    await inst.league.owners();
    console.log(inst.league._owners);
    await inst.league.matchups(1);
    console.log(inst.league._matchups);
    await inst.league.playoffs();
    console.log(inst.league._playoffs);
    await inst.league.transactions(1);
    console.log(inst.league._transactions);
    await inst.league.traded_picks();
    console.log(inst.league._traded_picks);
    await inst.league.drafts();
    console.log(inst.league._drafts[0]);
})();