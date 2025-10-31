import Statement from "../../src/components/parser/statement";
import BlockStatement from "../../src/components/parser/statement/blockStatement";
import { TokenTypes } from "../../src/constants/consoSpec";
import consoModule from "../../src/module/consoModule";

jest.mock("../../src/module/consoModule");

const blockStatementMock = new (<any>(
  BlockStatement
))() as jest.Mocked<BlockStatement>;

afterEach(() => {
  jest.clearAllMocks();
});

test("test getStatementImpl of statement class with should success", () => {
  const lookahead = {
    type: TokenTypes.OPEN_CURLY_BRACE_TYPE,
    value: "{",
  };

  consoModule.getBlockStatement = jest
    .fn()
    .mockReturnValue(blockStatementMock);

  expect(Statement.getStatementImpl(lookahead)).toStrictEqual(
    blockStatementMock
  );

  expect(consoModule.getBlockStatement).toHaveBeenCalledTimes(1);
});
