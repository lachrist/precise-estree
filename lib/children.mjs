import { EstreeSentryTypeError } from "./error.mjs";
import { filter, isNotNull } from "./util/index.mjs";

/**
 * @type {<X>(
 *   node: import("./node").Node<X>,
 * ) => import("./node").Node<X>[]}
 */
export const listChildren = (node) => {
  switch (node.type) {
    case "Program": {
      return [...node.body];
    }
    case "ArrayExpression": {
      return filter(node.elements, isNotNull);
    }
    case "ObjectExpression": {
      return [...node.properties];
    }
    case "ObjectPattern": {
      return [...node.properties];
    }
    case "FunctionExpression": {
      if (node.id === null) {
        return [...node.params, node.body];
      } else {
        return [node.id, ...node.params, node.body];
      }
    }
    case "ArrowFunctionExpression": {
      return [...node.params, node.body];
    }
    case "ClassExpression": {
      return filter([node.id, node.superClass, node.body], isNotNull);
    }
    case "PropertyDefinition": {
      if (node.value === null) {
        return [node.key];
      } else {
        return [node.key, node.value];
      }
    }
    case "VariableDeclaration": {
      return [...node.declarations];
    }
    case "VariableDeclarator": {
      if (node.init === null) {
        return [node.id];
      } else {
        return [node.id, node.init];
      }
    }
    case "BlockStatement": {
      return [...node.body];
    }
    case "ReturnStatement": {
      if (node.argument === null) {
        return [];
      } else {
        return [node.argument];
      }
    }
    case "FunctionDeclaration": {
      if (node.id === null) {
        return [...node.params, node.body];
      } else {
        return [node.id, ...node.params, node.body];
      }
    }
    case "ClassDeclaration": {
      return filter([node.id, node.superClass, node.body], isNotNull);
    }
    case "ForStatement": {
      return filter([node.init, node.test, node.update, node.body], isNotNull);
    }
    case "ForInStatement": {
      return [node.left, node.right, node.body];
    }
    case "ForOfStatement": {
      return [node.left, node.right, node.body];
    }
    case "WhileStatement": {
      return [node.test, node.body];
    }
    case "DoWhileStatement": {
      return [node.body, node.test];
    }
    case "IfStatement": {
      if (node.alternate === null) {
        return [node.test, node.consequent];
      } else {
        return [node.test, node.consequent, node.alternate];
      }
    }
    case "SwitchStatement": {
      return [node.discriminant, ...node.cases];
    }
    case "SwitchCase": {
      return filter([node.test, ...node.consequent], isNotNull);
    }
    case "TryStatement": {
      return filter([node.block, node.handler, node.finalizer], isNotNull);
    }
    case "CatchClause": {
      if (node.param === null) {
        return [node.body];
      } else {
        return [node.param, node.body];
      }
    }
    case "ThrowStatement": {
      return [node.argument];
    }
    case "LabeledStatement": {
      return [node.label, node.body];
    }
    case "BreakStatement": {
      if (node.label === null) {
        return [];
      } else {
        return [node.label];
      }
    }
    case "ContinueStatement": {
      if (node.label === null) {
        return [];
      } else {
        return [node.label];
      }
    }
    case "WithStatement": {
      return [node.object, node.body];
    }
    case "DebuggerStatement": {
      return [];
    }
    case "ExpressionStatement": {
      return [node.expression];
    }
    case "EmptyStatement": {
      return [];
    }
    case "SequenceExpression": {
      return [...node.expressions];
    }
    case "UnaryExpression": {
      return [node.argument];
    }
    case "UpdateExpression": {
      return [node.argument];
    }
    case "BinaryExpression": {
      return [node.left, node.right];
    }
    case "AssignmentExpression": {
      return [node.left, node.right];
    }
    case "LogicalExpression": {
      return [node.left, node.right];
    }
    case "MemberExpression": {
      return [node.object, node.property];
    }
    case "CallExpression": {
      return [node.callee, ...node.arguments];
    }
    case "NewExpression": {
      return [node.callee, ...node.arguments];
    }
    case "ConditionalExpression": {
      return [node.test, node.consequent, node.alternate];
    }
    case "YieldExpression": {
      if (node.argument === null) {
        return [];
      } else {
        return [node.argument];
      }
    }
    case "AwaitExpression": {
      return [node.argument];
    }
    case "TaggedTemplateExpression": {
      return [node.tag, node.quasi];
    }
    case "TemplateLiteral": {
      return [...node.quasis, ...node.expressions];
    }
    case "TemplateElement": {
      return [];
    }
    case "ArrayPattern": {
      return filter(node.elements, isNotNull);
    }
    case "RestElement": {
      return [node.argument];
    }
    case "AssignmentPattern": {
      return [node.left, node.right];
    }
    case "Property": {
      return [node.key, node.value];
    }
    case "ChainExpression": {
      return [node.expression];
    }
    case "ClassBody": {
      return [...node.body];
    }
    case "MethodDefinition": {
      return [node.key, node.value];
    }
    case "StaticBlock": {
      return [...node.body];
    }
    case "SpreadElement": {
      return [node.argument];
    }
    case "Super": {
      return [];
    }
    case "ImportDeclaration": {
      return [...node.specifiers, node.source];
    }
    case "ImportSpecifier": {
      return [node.imported, node.local];
    }
    case "ImportDefaultSpecifier": {
      return [node.local];
    }
    case "ImportNamespaceSpecifier": {
      return [node.local];
    }
    case "ExportAllDeclaration": {
      if (node.exported === null) {
        return [node.source];
      } else {
        return [node.exported, node.source];
      }
    }
    case "ExportNamedDeclaration": {
      return filter(
        [node.declaration, ...node.specifiers, node.source],
        isNotNull,
      );
    }
    case "ExportDefaultDeclaration": {
      return [node.declaration];
    }
    case "ExportSpecifier": {
      return [node.local, node.exported];
    }
    case "ThisExpression": {
      return [];
    }
    case "Identifier": {
      return [];
    }
    case "Literal": {
      return [];
    }
    case "ImportExpression": {
      return [node.source];
    }
    case "MetaProperty": {
      return [node.meta, node.property];
    }
    case "PrivateIdentifier": {
      return [];
    }
    /* c8 ignore start */
    default: {
      throw new EstreeSentryTypeError(node);
    }
    /* c8 ignore stop */
  }
};
