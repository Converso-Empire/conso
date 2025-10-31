import { TokenTypes } from "../../../../../constants/consoSpec";
import UnsupportedTypeException from "../../../../../exceptions/unsupportedTypeException";
import consoModule from "../../../../../module/consoModule";
import TokenExecutor from "../../../tokenExecutor";
import { ASTNode } from "../../../types/nodeTypes";

export default abstract class Literal {
  protected _tokenExecutor: TokenExecutor;

  constructor(tokenExecutor: TokenExecutor) {
    this._tokenExecutor = tokenExecutor;
  }

  abstract getLiteral(): ASTNode;

  static getLiteralImpl(tokenType?: string): Literal {
    switch (tokenType) {
      case TokenTypes.NUMBER_TYPE:
        return consoModule.getNumericLiteral();

      case TokenTypes.BOOLEAN_TYPE:
        return consoModule.getBooleanLiteral();

      case TokenTypes.STRING_TYPE:
        return consoModule.getStringLiteral();

      case TokenTypes.NALLA_TYPE:
        return consoModule.getNullLiteral();

      default:
        throw new UnsupportedTypeException(
          `Token type not supproted for literal: ${tokenType}`
        );
    }
  }
}
