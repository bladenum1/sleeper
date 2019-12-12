const fs = require('fs');
import '@babel/polyfill';
import { sleeper } from '../index';

(async () => {
    const inst = new sleeper();

    inst.user = `bladeis1`;
    await inst.user._response;
    await inst.user.leagues(2020);
    inst.league = inst.user._leagues[0].league_id;
    await inst.league._response;
    await inst.league.drafts();
    inst.draft = inst.league._drafts[0].draft_id;
    await inst.draft._response;
    console.log(inst.draft._info);
})();