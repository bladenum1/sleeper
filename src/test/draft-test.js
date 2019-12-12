import '@babel/polyfill';
import { sleeper } from '../index';

(async () => {
    const inst = new sleeper();

    inst.draft = `507414222434492416`;
    await inst.draft._response;
    console.log(inst.draft._info);
    await inst.draft.picks();
    console.log(inst.draft._picks);
})();