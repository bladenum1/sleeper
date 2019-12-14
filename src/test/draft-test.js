import { sleeper } from '../index';

(async () => {
    const draft_ids = [`507414222434492416`];
    const inst = new sleeper();

    inst.drafts = draft_ids;
    console.log(inst);
    await Promise.all(inst.draft_promises);
    console.log(inst.drafts[draft_ids[0]]);
    await inst.drafts[draft_ids[0]].picks();
    console.log(inst.drafts[draft_ids[0]]._picks);
})();