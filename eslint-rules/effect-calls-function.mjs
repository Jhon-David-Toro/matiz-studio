const EFFECT_HOOKS = new Set(["useEffect", "useLayoutEffect", "useInsertionEffect"]);

const MESSAGE = "An effect only calls a named function. Move the logic to a function in X.utils.ts and call it here.";

/**
 * Name of the hook a call refers to, for `useEffect(...)` and `React.useEffect(...)`.
 *
 * @param {import("estree").CallExpression} node Call to inspect.
 * @returns {string | undefined} The name of the called function, if it has one.
 */
function calleeName(node) {
  if (node.callee.type === "Identifier") return node.callee.name;
  if (node.callee.type === "MemberExpression") return node.callee.property.name;
  return undefined;
}

/**
 * Whether an expression is `undefined` or `null`, the "do nothing" branch of a conditional effect.
 *
 * @param {import("estree").Expression} node Expression to inspect.
 * @returns {boolean} True for `undefined` and `null`.
 */
function isNothing(node) {
  return (node.type === "Identifier" && node.name === "undefined") || (node.type === "Literal" && node.value === null);
}

/**
 * Whether an expression is a call, or a `condition ? call() : undefined` that picks one.
 *
 * @param {import("estree").Expression} node Expression to inspect.
 * @returns {boolean} True when the expression only calls a function.
 */
function isCall(node) {
  if (node.type === "CallExpression") return true;
  if (node.type !== "ConditionalExpression") return false;
  return [node.consequent, node.alternate].every((branch) => branch.type === "CallExpression" || isNothing(branch));
}

/**
 * Whether a statement is a single call, either on its own or returned (to hand back its cleanup).
 *
 * @param {import("estree").Statement} statement Statement to inspect.
 * @returns {boolean} True when the statement only calls a function.
 */
function isCallStatement(statement) {
  if (statement.type === "ExpressionStatement") return isCall(statement.expression);
  return statement.type === "ReturnStatement" && Boolean(statement.argument) && isCall(statement.argument);
}

/**
 * Whether the body of an effect callback does nothing but call a function.
 *
 * @param {import("estree").ArrowFunctionExpression | import("estree").FunctionExpression} callback Effect callback.
 * @returns {boolean} True when the effect follows the rule.
 */
function onlyCallsFunction(callback) {
  if (callback.body.type !== "BlockStatement") return isCall(callback.body);
  return callback.body.body.length === 1 && isCallStatement(callback.body.body[0]);
}

/** Effects only call a named function: the logic lives in utils, the effect only wires it to React. */
export const effectCallsFunction = {
  meta: {
    type: "suggestion",
    docs: { description: "Require effects to only call a named function" },
    schema: [],
    messages: { onlyCall: MESSAGE },
  },
  /**
   * Visits every call and reports effects whose callback does more than call a function.
   *
   * @param {import("eslint").Rule.RuleContext} context Context of the rule.
   * @returns {import("eslint").Rule.RuleListener} The visitors of the rule.
   */
  create(context) {
    return {
      /**
       * Checks one call expression.
       *
       * @param {import("estree").CallExpression} node Call to inspect.
       */
      CallExpression(node) {
        if (!EFFECT_HOOKS.has(calleeName(node))) return;
        const [callback] = node.arguments;
        if (callback && !onlyCallsFunction(callback)) context.report({ node: callback, messageId: "onlyCall" });
      },
    };
  },
};

const plugin = { rules: { "effect-calls-function": effectCallsFunction } };

export default plugin;
