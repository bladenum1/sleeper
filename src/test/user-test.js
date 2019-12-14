const fs = require('fs');
import { sleeper } from '../index';

(async () => {
    const inst = new sleeper();
    const usernames = [`bladeis1`];

    inst.users = usernames;
    await Promise.all(inst.user_promises);
    console.log(inst.users);
    await inst.users[usernames[0]].fetch_avatar(inst.users[usernames[0]].avatar);
    console.log(inst.users[usernames[0]].avatar_buffer);
    fs.writeFile(`${inst.users[usernames[0]].name}.png`, inst.users[usernames[0]].avatar_buffer, 'binary', (err) => {
        if (err) {
            throw err
        }
    });
    await inst.users[usernames[0]].fetch_leagues(2020);
    console.log(inst.users[usernames[0]].leagues);
    await inst.users[usernames[0]].fetch_drafts(2020);
    console.log(inst.users[usernames[0]].drafts);
})();