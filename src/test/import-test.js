const fs = require('fs');
import '@babel/polyfill';
import { sleeper } from '../index';

(async () => {
    const inst = new sleeper('bladeis1');
    await inst.user._response;
    console.log(inst.user._info);
    await inst.user.avatar(inst.user._info.avatar);
    fs.writeFile(`${inst.user.name}.png`, inst.user._avatar, 'binary', (err) => {
        if (err) {
            throw err
        }
    });
})();