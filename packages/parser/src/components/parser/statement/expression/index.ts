import { NodeType } from "../../../../constants/constants";
import consoModule from "../../../../module/consoModule";
import TokenExecutor from "../../tokenExecutor";
import { ASTNode } from "../../types/nodeTypes";


export default abstract class Expression {
  protected _tokenExecutor: TokenExecutor;

  constructor(tokenExecutor: TokenExecutor) {
    this._tokenExecutor = tokenExecutor;
  }

  abstract getExpression(): ASTNode;

  static getExpressionImpl(expressionType: keyof typeof NodeType): Expression {
    switch (expressionType) {
      case NodeType.AdditiveExpression:
        return consoModule.getAdditiveExpression();

      case NodeType.MultiplicativeExpression:
        return consoModule.getMultiplicativeExpression();

      case NodeType.PrimaryExpression:
        return consoModule.getPrimaryExpression();

      case NodeType.ParanthesizedExpression:
        return consoModule.getParanthesizedExpression();

      case NodeType.AssignmentExpression:
        return consoModule.getAssignmentExpression();

      case NodeType.EqualityExpression:
        return consoModule.getEqualityExpression();

      case NodeType.LogicalANDExpression:
        return consoModule.getLogicalANDExpression();

      case NodeType.LogicalORExpression:
        return consoModule.getLogicalORExpression();

      case NodeType.RelationalExpression:
        return consoModule.getRelationalExpression();

      default:
        return consoModule.getIndentifierExpression();
    }
  }

  protected getBinaryExpression(
    downstreamExpressionType: keyof typeof NodeType,
    operatorToken: string
  ) {
    return this._getExpression(downstreamExpressionType, operatorToken, NodeType.BinaryExpression);
  }

  protected getLogicalExpression(
    downstreamExpressionType: keyof typeof NodeType,
    operatorToken: string
    ) {
    return this._getExpression(downstreamExpressionType, operatorToken, NodeType.LogicalExpression);
  }

  private _getExpression(
    downstreamExpressionType: keyof typeof NodeType,
    operatorToken: string,
    expressionType: keyof typeof NodeType
    ) {
    let left = Expression.getExpressionImpl(downstreamExpressionType).getExpression();

    while (this._tokenExecutor.getLookahead()?.type === operatorToken) {
      const operator =
        this._tokenExecutor.eatTokenAndForwardLookahead(operatorToken);
      const right =
        Expression.getExpressionImpl(downstreamExpressionType).getExpression();

      left = {
        type: expressionType,
        operator: operator.value,
        left,
        right,
      };
    }

    return left;
  }

}
