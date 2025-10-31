import { RuntimeException } from "../../src";
import nullPointerException from "../../src/exceptions/nullPointerException";


export const NegativeTestCases = [
  {
    name: "interpreter assigning variable before declaration test, should throw an exception",
    input: `
          start conso;
          a = 4;
          end conso;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with addition, should throw an exception",
    input: `
          start conso;
          a += 4;
          end conso;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with subtraction, should throw an exception",
    input: `
          start conso;
          a -= 4;
          end conso;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with multiplication, should throw an exception",
    input: `
          start conso;
          a -= 4;
          end conso;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test with division, should throw an exception",
    input: `
          start conso;
          a /= 4;
          end conso;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter assigning variable before declaration test - 2, should throw an exception",
    input: `
          start conso;
          a;
          end conso;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter adding two variables before declaration test, should throw an exception",
    input: `
          start conso;
          a + b;
          end conso;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter adding variable with constant before declaration test, should throw an exception",
    input: `
          start conso;
          a + 4;
          end conso;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter subtracting variable with constant before declaration test, should throw an exception",
    input: `
          start conso;
          a - 4;
          end conso;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter subtracting two variables before declaration test, should throw an exception",
    input: `
          start conso;
          a - b;
          end conso;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter multiplying variable with constant before declaration test, should throw an exception",
    input: `
          start conso;
          a * 4;
          end conso;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter multiplying two variables before declaration test, should throw an exception",
    input: `
          start conso;
          a * b;
          end conso;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter dividing variable with constant before declaration test, should throw an exception",
    input: `
          start conso;
          a / 4;
          end conso;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter dividing two variables before declaration test, should throw an exception",
    input: `
          start conso;
          a / b;
          end conso;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter printing variable before declaration test, should throw an exception",
    input: `
          start conso;
          conso print a;
          end conso;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter printing multiple variables before declaration test, should throw an exception",
    input: `
          start conso;
          conso print a, b;
          end conso;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter printing multiple variables with only one of them declared, should throw an exception",
    input: `
          start conso;
          conso a = 8;
          conso print a, b;
          end conso;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter declaring multiple variables with chain assignment, should throw an exception",
    input: `
          start conso;
          conso a = b = 8;
          end conso;
        `,
    exception: RuntimeException,
  },
  {
    name: "interpreter re declare already declared variable, should throw an exception",
    input: `
        start conso;
        conso a;
        a = 9;
        conso a = 0;
        end conso;
      `,
    exception: RuntimeException,
  },
  // cases with null
  {
    name: "interpreter use null variable in expression, should throw an exception",
    input: `
      start conso;
      conso a;
      conso print a + 9;
      end conso;
    `,
    exception: nullPointerException,
  },
  {
    name: "interpreter use null variable in expression - 2, should throw an exception",
    input: `
      start conso;
      conso a = null;
      conso print a + 9;
      end conso;
    `,
    exception: nullPointerException,
  },
  {
    name: "interpreter use null in variable initialisation expression, should throw an exception",
    input: `
      start conso;
      conso a = null + 80;
      end conso;
    `,
    exception: nullPointerException,
  },
  {
    name: "interpreter use null in variable initialisation expression - 2, should throw an exception",
    input: `
      start conso;
      conso a = null + "jam";
      end conso;
    `,
    exception: nullPointerException,
  },
  {
    name: "interpreter use null variable in another variable initialisation expression, should throw an exception",
    input: `
      start conso;
      conso a;
      conso b = a + "hello";
      end conso;
    `,
    exception: nullPointerException,
  },
  {
    name: "interpreter use null variable in complex expression, should throw an exception",
    input: `
      start conso;
      conso a;
      conso b = ((a*9) * a + "hello");
      end conso;
    `,
    exception: nullPointerException,
  },
  // true - false case
  {
    name: "interpreter use true variable in expression, should throw an exception",
    input: `
      start conso;
      conso a = true;
      conso print a + 9;
      end conso;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use false variable in expression, should throw an exception",
    input: `
      start conso;
      conso a = false;
      conso print a + 9;
      end conso;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use true in variable initialisation expression, should throw an exception",
    input: `
      start conso;
      conso a = true + 80;
      end conso;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use false in variable initialisation expression, should throw an exception",
    input: `
      start conso;
      conso a = false + 80;
      end conso;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use true variable in another variable initialisation expression, should throw an exception",
    input: `
      start conso;
      conso a = true;
      conso b = a + "hello";
      end conso;
    `,
    exception: RuntimeException,
  },
  {
    name: "interpreter use false variable in complex expression, should throw an exception",
    input: `
      start conso;
      conso a = false;
      conso b = ((a*9) * a + "hello");
      end conso;
    `,
    exception: RuntimeException,
  },
  // ##########

  {
    name: "complex expression test with one null operand, should throw an exception",
    input: `
        start conso
        (null * (4 + 8 + 10));
        end conso
      `,
    output: nullPointerException,
  },
  {
    name: "complex expression test with one null operand and one boolean operand, should throw an exception",
    input: `
        start conso
        (null * (true + 8 + 10));
        end conso
      `,
    output: RuntimeException,
  },
  {
    name: "complex expression test with one null operand and one boolean operand - 2, should throw null pointer exception",
    input: `
        start conso
        (true * (null + 8 + 10));
        end conso
      `,
    output: nullPointerException,
  },
  {
    name: "complex expression test with one null operand and one boolean operand - 3, should throw null pointer exception",
    input: `
        start conso
        (null + true);
        end conso
      `,
    output: nullPointerException,
  },
  {
    name: "complex expression test with one boolean operand, should throw an exception",
    input: `
        start conso
        (true * (4 + 8 + 10));
        end conso
      `,
    output: RuntimeException,
  },
  {
    name: "additive expression test with only boolean operand, should throw an exception",
    input: `
        start conso
        true + false;
        end conso
      `,
    output: RuntimeException,
  },
  {
    name: "additive expression test with only variable boolean operand, should throw an exception",
    input: `
        start conso
        conso a = true, b = false;
        a + b;
        end conso
      `,
    output: RuntimeException,
  },
  {
    name: "multiplicative expression test with only boolean operand, should throw an exception",
    input: `
        start conso
        true * false;
        end conso
      `,
    output: RuntimeException,
  },
  {
    name: "multiplicative expression test with only variable boolean operand, should throw an exception",
    input: `
        start conso
        conso a = true, b = false;
        a * b;
        end conso
      `,
    output: RuntimeException,
  },
  {
    name: "division expression test with only boolean operand, should throw an exception",
    input: `
        start conso
        true / false;
        end conso
      `,
    output: RuntimeException,
  },
  {
    name: "division expression test with only variable boolean operand, should throw an exception",
    input: `
        start conso
        conso a = true, b = false;
        a / b;
        end conso
      `,
    output: RuntimeException,
  },
  {
    name: "print statement test with expression containing null, should throw an exception",
    input: `
        start conso
        conso print null + 5;
        end conso;
      `,
    output: nullPointerException,
  },
  {
    name: "complex assign test with expression containing null, should throw an exception",
    input: `
        start conso
        conso a;
        a *= 5;
        end conso;
      `,
    output: nullPointerException,
  },
  {
    name: "complex assign test with expression containing true, should throw an exception",
    input: `
        start conso
        conso a = true;
        a *= 5;
        end conso;
      `,
    output: nullPointerException,
  },
  {
    name: "complex assign test with expression containing null - 2, should throw an exception",
    input: `
        start conso
        conso a = null;
        a /= 5;
        end conso;
      `,
    output: nullPointerException,
  },
  // while loop negative tests
  {
    name: "infinite while loop, should throw an exception",
    input: `
        start conso
        conso while (true) {

        }
        end conso;
      `,
    output: RuntimeException,
  },
  {
    name: "infinite condition while loop, should throw an exception",
    input: `
        start conso
        conso a = 0;
        conso while (a < 2) {
          conso print "conso";
        }
        end conso;
      `,
    output: RuntimeException,
  },
  {
    name: "invalid use of break, should throw an exception",
    input: `
        start conso
        conso a = 0;
        conso if (true)
          stop conso;
        end conso;
      `,
    output: RuntimeException,
  },
  // logical expression negative tests
  {
    name: "use of null with &&, should throw an exception",
    input: `
        start conso
        conso print null && 90;
        end conso;
      `,
    output: nullPointerException,
  },
  {
    name: "use of null variable with &&, should throw an exception",
    input: `
        start conso
        conso a;
        conso print a && 90;
        end conso;
      `,
    output: nullPointerException,
  },
  // modulus operator test
  {
    name: `modulus operator test with invalid operand, should throw an exception`,
    input: `
      start conso;
      conso print "true" % 9;
      end conso;
    `,
    output: RuntimeException,
  },
  // continue in loop test
  {
    name: "infinite condition while loop with continue, should throw an exception",
    input: `
        start conso
        conso a = 0;
        conso while (a < 2) {
          conso next;
          a = 5;
        }
        end conso;
      `,
    output: RuntimeException,
  },
  {
    name: "invalid use of continue, should throw an exception",
    input: `
        start conso
        conso a = 0;
        conso if (true)
          conso next
        end conso;
      `,
    output: RuntimeException,
  },
];
