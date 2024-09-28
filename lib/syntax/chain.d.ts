import { OptionalCallExpression } from "./call";
import { Expression } from "./expression";
import { OptionalMemberExpression } from "./member";

export type ChainableExpression<X> =
  | OptionalCallExpression<X>
  | OptionalMemberExpression<X>
  | Expression<X>;

export type ChainExpression<X> = (X extends null ? {} : X) & {
  type: "ChainExpression";
  expression: ChainableExpression<X>;
};
