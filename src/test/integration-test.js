import { sleeper } from '../index';

(async () => {
    const users = [`bladeis1`];
    const inst = new sleeper();

    inst.users = users;
    await Promise.all(inst.user_promises);
    await inst.users[users[0]].fetch_leagues(2020);

    const leagues = inst.users[users[0]].leagues
    inst.leagues = [leagues[0].league_id];
    await Promise.all(inst.league_promises);
    await inst.leagues[leagues[0].league_id].fetch_drafts();

    const drafts = inst.leagues[leagues[0].league_id].drafts;
    inst.drafts = [drafts[0].draft_id];
    await Promise.all(inst.draft_promises);
    console.log(inst.drafts);
})();