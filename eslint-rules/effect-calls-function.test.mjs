import { RuleTester } from "eslint";
import { afterAll, describe, it } from "vitest";

import { effectCallsFunction } from "./effect-calls-function.mjs";

RuleTester.describe = describe;
RuleTester.it = it;
RuleTester.afterAll = afterAll;

const tester = new RuleTester({ languageOptions: { ecmaVersion: 2024, sourceType: "module" } });

const ERROR = [{ messageId: "onlyCall" }];

tester.run("effect-calls-function", effectCallsFunction, {
  valid: [
    "useEffect(() => syncDialog(ref.current, open), [open]);",
    "useEffect(() => (open ? listenEscape(hide) : undefined), [open]);",
    "useEffect(() => { saveTitle(title); }, [title]);",
    "useEffect(() => { return listenEscape(hide); }, []);",
    "React.useEffect(() => startClock(), []);",
    "useMemo(() => { const a = 1; return a + 1; }, []);",
  ],
  invalid: [
    { code: "useEffect(() => { document.title = title; }, [title]);", errors: ERROR },
    { code: "useEffect(() => { if (open) show(); }, [open]);", errors: ERROR },
    { code: "useEffect(() => { load(); save(); }, []);", errors: ERROR },
    { code: "useLayoutEffect(() => value + 1, []);", errors: ERROR },
    { code: "useEffect(() => (open ? show() : hide && hide()), [open]);", errors: ERROR },
  ],
});
