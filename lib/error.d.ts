import type { Kind } from "./kind";
import type { Path } from "./path";
import type { Primitive } from "./util/primitive";

export class EstreeSentryTypeError extends TypeError {
  constructor(cause: never);
  message: string;
  cause: never;
}

export type SyntaxErrorCause = {
  node: object;
  path: Path;
  kind: Kind;
  prop: string;
  expect: string | Primitive[];
  actual: unknown;
};

export class EstreeSentrySyntaxError extends SyntaxError {
  constructor(message: string, cause: SyntaxErrorCause);
  message: string;
  cause: never;
}
