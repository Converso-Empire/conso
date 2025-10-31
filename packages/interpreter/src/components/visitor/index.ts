import { ASTNode } from "conso-parser";

export default interface Visitor {
  visitNode(node: ASTNode): unknown;
}
