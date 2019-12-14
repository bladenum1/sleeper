const sleeper_package = require('sleeper_fantasy');

(async () => {
    const users = [`bladeis1`];
    const sleeper_instance = new sleeper_package.sleeper();

    sleeper_instance.users = users;
    await Promise.all(sleeper_instance.user_promises);
    await sleeper_instance.users[users[0]].fetch_leagues(2020);

    const leagues = sleeper_instance.users[users[0]].leagues
    sleeper_instance.leagues = [leagues[0].league_id];
    await Promise.all(sleeper_instance.league_promises);
    await sleeper_instance.leagues[leagues[0].league_id].fetch_drafts();

    const drafts = sleeper_instance.leagues[leagues[0].league_id].drafts;
    sleeper_instance.drafts = [drafts[0].draft_id];
    await Promise.all(sleeper_instance.draft_promises);
    console.log(sleeper_instance.drafts);
})();