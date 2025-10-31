import { Parser } from "../../src/components/parser";
import Program from "../../src/components/parser/program";
import TokenExecutor from "../../src/components/parser/tokenExecutor";
import Tokenizer from "../../src/components/tokenizer";
import consoModule from "../../src/module/consoModule";

test("test consoModule should success", () => {
  expect(consoModule.getTokenizer()).toBeInstanceOf(Tokenizer);
  expect(consoModule.getTokenExecutor()).toBeInstanceOf(TokenExecutor);
  expect(consoModule.getProgram()).toBeInstanceOf(Program);
  expect(consoModule.getParser()).toBeInstanceOf(Parser);
});
