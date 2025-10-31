import Visitor from ".";
import { ASTNode } from "conso-parser";

export default class EmptyStatement implements Visitor {
  visitNode(_: ASTNode) {
    return;
  }
}
