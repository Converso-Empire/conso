import { RuntimeException } from "../../src";
import Interpreter from "../../src/components/interpreter";
import InterpreterModule from "../../src/module/interpreterModule";

import { NegativeTestCases } from "./negativeTestsProvider";
import {
  NoOutputPositiveTests,
  WithOutputPositiveTests
} from "./positiveTestsProvider";


let interpreter: Interpreter = InterpreterModule.getInterpreter();

console.log = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
});

NoOutputPositiveTests.forEach((testCase) => {
  test(testCase.name, () => {
    expect(() => interpreter.interpret(testCase.input)).not.toThrowError();
  });
});

WithOutputPositiveTests.forEach((testCase) => {
  test(testCase.name, () => {
    expect(() => interpreter.interpret(testCase.input)).not.toThrowError();

    expect(console.log).toHaveBeenCalledWith(testCase.output);
  });
});

NegativeTestCases.forEach((testCase) => {
  test(testCase.name, () => {
    expect(() => interpreter.interpret(testCase.input)).toThrowError(
      testCase.exception
    );
  });
});

test("test redeclaring & printing variables in different scopes", () => {
  expect(() =>
    interpreter.interpret(`start conso;
    conso a = 4;
    {
      conso a = 90;
      conso print a;
    }
    conso print a;
    end conso;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("90");
  expect(console.log).toHaveBeenCalledWith("4");
});

test("test assigning variable in parent scope", () => {
  expect(() =>
    interpreter.interpret(`start conso;
    conso a = 4;
    {
      a = 90;
      conso print a;
    }
    conso print a;
    end conso;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("90");
  expect(console.log).toHaveBeenCalledWith("90");
});

test("test accessing variable in parent scope", () => {
  expect(() =>
    interpreter.interpret(`start conso;
    conso a = 4;
    {
      conso print a;
    }
    conso print a;
    end conso;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("4");
  expect(console.log).toHaveBeenCalledWith("4");
});

test("whileStatement test with 2 times loop, should success", () => {
  expect(() =>
    interpreter.interpret(`
    start conso;
    conso a = 0;
    conso while (a < 2) {
      conso print "conso";
      a += 1;
    }
    end conso;`)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("conso");
  expect(console.log).toHaveBeenCalledWith("conso");
});

test("whileStatement test with nested loops - 2, should success", () => {
  expect(() =>
    interpreter.interpret(`
    start conso;
    conso a = 0, b = 0;
    conso while (a < 2) {
      conso while (b < 1) {
        conso print "conso";
        b += 1;
      }
      a += 1;
    }
    end conso;
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("conso");
});

test("whileStatement test with nested loops - 3, should success", () => {
  expect(() =>
    interpreter.interpret(`
    start conso;
    conso a = 0;
    conso while (a < 2) {
      conso b = 0;
      conso while (b < 2) {
        conso print "conso";
        b += 1;
        conso if (b == 1)
          stop conso;
      }
      a += 1;
    }
    end conso;
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("conso");
  expect(console.log).toHaveBeenCalledWith("conso");
});


test("whileStatement test with nested loops - 4, should success", () => {
  expect(() =>
    interpreter.interpret(`
    start conso
    conso a = 0;
    conso while (a < 10) {
      conso print a;
      a += 1;
      conso if (a == 6) {
        stop conso;
      }
    }
    conso print "done";
    end conso
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("0");
  expect(console.log).toHaveBeenCalledWith("1");
  expect(console.log).toHaveBeenCalledWith("2");
  expect(console.log).toHaveBeenCalledWith("3");
  expect(console.log).toHaveBeenCalledWith("4");
  expect(console.log).toHaveBeenCalledWith("5");
});

test("whileStatement test with nested loops - 5, should success", () => {
  expect(() =>
    interpreter.interpret(`
    start conso
    conso a = 0;
    conso while (a < 10) {
      conso print a;
      a += 1;
      conso if (a == 6)
        stop conso;
    }
    conso print "done";
    end conso
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("0");
  expect(console.log).toHaveBeenCalledWith("1");
  expect(console.log).toHaveBeenCalledWith("2");
  expect(console.log).toHaveBeenCalledWith("3");
  expect(console.log).toHaveBeenCalledWith("4");
  expect(console.log).toHaveBeenCalledWith("5");
});

test("whileStatement test with nested loops - 6, should success", () => {
  expect(() =>
    interpreter.interpret(`
    start conso
    conso a = 0;
    conso while (a < 10) {
      conso print a;
      a += 1;
      conso if (a == 3) {
        stop conso;
      }
      conso print "2 baar hi chapunga";
    }
    conso print "done";
    end conso
    `)
  ).not.toThrowError();
  expect(console.log).toHaveBeenCalledWith("0");
  expect(console.log).toHaveBeenCalledWith("1");
  expect(console.log).toHaveBeenCalledWith("2");
  expect(console.log).toHaveBeenCalledWith("2 baar hi chapunga");
  expect(console.log).toHaveBeenCalledWith("2 baar hi chapunga");
});

test("whileStatement test with infinite loop, should throw runtime exception after 5000 executions", () => {
  expect(() =>
    interpreter.interpret(`
    start conso
    
    conso while (true) {
      conso print "conso";
    }
    end conso;
    
    `)
  ).toThrowError(RuntimeException);

  expect(console.log).toHaveBeenCalledTimes(5001);
  expect(console.log).toHaveBeenCalledWith("conso");
});

test("if-else ladders one after the other, should be evaluated separately", () => {
  expect(() =>
    interpreter.interpret(`
    start conso
    conso x = 6;
    conso if (x < 5) {
      conso print "x < 5";
    } conso else-if (x < 8) {
      conso print "x < 8";
    } conso if (x < 4) {
      conso print "x < 4";
    } conso else {
      conso print "x > 4";
    }
    end conso;
    
    `)
  ).not.toThrowError();

  expect(console.log).toHaveBeenCalledWith("x < 8");
  expect(console.log).toHaveBeenCalledWith("x > 4");
});

// test("jest", () => {
//     interpreter.interpret(`
//     start conso
//     conso a = 0;
//     conso while (a < 10) {
//       conso print a;
//       a += 1;
//       conso if (a == 3) {
//         stop conso;
//       }
//       conso print "2 baar hi chapunga";
//     }
//     conso print "done";
//     end conso
//     `);
// });
