import { sleeper } from '../index';

(async () => {
    const league_ids = [`507414218714144768`];
    const inst = new sleeper();

    inst.leagues = league_ids;
    console.log(inst);
    await Promise.all(inst.league_promises);
    console.log(inst);
    await inst.leagues[league_ids[0]].fetch_rosters();
    console.log(inst.leagues[league_ids[0]].rosters);
    await inst.leagues[league_ids[0]].fetch_owners();
    console.log(inst.leagues[league_ids[0]].owners);
    await inst.leagues[league_ids[0]].fetch_matchups(1);
    console.log(inst.leagues[league_ids[0]].matchups);
    await inst.leagues[league_ids[0]].fetch_playoffs();
    console.log(inst.leagues[league_ids[0]].playoffs);
    await inst.leagues[league_ids[0]].fetch_transactions(1);
    console.log(inst.leagues[league_ids[0]].transactions);
    await inst.leagues[league_ids[0]].fetch_traded_picks();
    console.log(inst.leagues[league_ids[0]].traded_picks);
    await inst.leagues[league_ids[0]].fetch_drafts();
    console.log(inst.leagues[league_ids[0]].drafts[0]);
})();