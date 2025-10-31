import { TokenTypes } from "../../../constants/consoSpec";
import consoModule from "../../../module/consoModule";
import { Token } from "../../tokenizer/types";
import TokenExecutor from "../tokenExecutor";
import { ASTNode } from "../types/nodeTypes";


export default abstract class Statement {
  protected _tokenExecutor: TokenExecutor;

  constructor(tokenExecutor: TokenExecutor) {
    this._tokenExecutor = tokenExecutor;
  }

  abstract getStatement(): ASTNode;

  static getStatementImpl(lookahead: Token): Statement {
    switch (lookahead.type) {
      case TokenTypes.BOL_BHAI_TYPE:
        return consoModule.getPrintStatement();

      case TokenTypes.SEMI_COLON_TYPE:
        return consoModule.getEmptyStatement();

      case TokenTypes.OPEN_CURLY_BRACE_TYPE:
        return consoModule.getBlockStatement();

      case TokenTypes.BHAI_YE_HAI_TYPE:
        return consoModule.getVariableStatement();

      case TokenTypes.AGAR_BHAI:
        return consoModule.getIfStatement();

      case TokenTypes.JAB_TAK_BHAI:
        return consoModule.getWhileStatement();

      case TokenTypes.BAS_KAR_BHAI:
        return consoModule.getBreakStatement();
      
      case TokenTypes.AGLA_DEKH_BHAI:
        return consoModule.getContinueStatement();

      default:
        return consoModule.getExpressionStatement();
    }
  }
}
