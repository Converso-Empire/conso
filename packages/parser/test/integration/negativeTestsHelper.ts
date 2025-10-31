export const NegativeStatementTests = [
  // init statement tests
  {
    name: "only hi conso, should throw an exception",
    input: `
        hi conso
      `,
    output: SyntaxError,
  },
  {
    name: "only bye conso, should throw an exception",
    input: `
        bye conso
      `,
    output: SyntaxError,
  },
  {
    name: "multiple hi conso, should throw an exception",
    input: `
        hi conso
        hi conso
        bye conso
      `,
    output: SyntaxError,
  },
  {
    name: "multiple init, should throw an exception",
    input: `
        hi conso
        hi conso
        bye conso
        bye conso
      `,
    output: SyntaxError,
  },
  // block statement tests
  {
    name: "only open curly, should throw an exception",
    input: `
        hi conso
        {
        bye conso
      `,
    output: SyntaxError,
  },
  {
    name: "only closed curly, should throw an exception",
    input: `
        hi conso
        }
        bye conso
      `,
    output: SyntaxError,
  },
  {
    name: "open curly and no other token, should throw an exception",
    input: `
        hi conso
        {
      `,
    output: SyntaxError,
  },
  {
    name: "missing semi colon after expression, should throw an exception",
    input: `
        hi conso
        {
          naam = 4
        }
        bye conso
      `,
    output: SyntaxError,
  },
  // print statement test
  {
    name: "empty print statement, should throw an exception",
    input: `
        hi conso
        bol conso ;
        bye conso
      `,
    output: SyntaxError,
  },
  {
    name: "print statement without semi colon, should throw an exception",
    input: `
        hi conso
        bol conso 478
        bye conso
      `,
    output: SyntaxError,
  },
  {
    name: "print statement with space separated values, should throw an exception",
    input: `
        hi conso
        bol conso true false;
        bye conso
      `,
    output: SyntaxError,
  },
  {
    name: "print statement test with unknown thing printing, should throw an exception",
    input: `
        hi conso
        bol conso ~!*;
        bye conso
      `,
    output: SyntaxError,
  },
  {
    name: "print statement test with no other token, should throw an exception",
    input: `
        hi conso
        bol conso a
      `,
    output: SyntaxError,
  },
  // variable statement test
  {
    name: "variable statement test with space separated variable declaration, should throw an exception",
    input: `
        hi conso
        conso ye hai a b c;
        bye conso
      `,
    output: SyntaxError,
  },
  {
    name: "variable statement test without semi colon, should throw an exception",
    input: `
        hi conso
        conso ye hai a 
        bye conso
      `,
    output: SyntaxError,
  },
  {
    name: "variable statement test with no identifier token, should throw an exception",
    input: `
        hi conso
        conso ye hai ;
        bye conso
      `,
    output: SyntaxError,
  },
  {
    name: "variable statement test with identifier expression and no other token, should throw an exception",
    input: `
        hi conso
        conso ye hai a, b
      `,
    output: SyntaxError,
  },
  {
    name: "variable statement test with assignment expression and no other token, should throw an exception",
    input: `
        hi conso
        conso ye hai a = 5
      `,
    output: SyntaxError,
  },
  {
    name: "variable statement test with no other token, should throw an exception",
    input: `
        hi conso
        conso ye hai
      `,
    output: SyntaxError,
  },

  // while statement negative tests
  {
    name: "variable statement test with no other token, should throw an exception",
    input: `
    hi conso
    jab tak conso (x > 9)
      `,
    output: SyntaxError,
  },
];

export const NegativeExpressionsTests = [
  // assignment expression tests
  {
    name: "simple assignment expression test without semi colon, should throw an exception",
    input: `
        hi conso
        a = 4
        bye conso
      `,
    output: SyntaxError,
  },
  {
    name: "complex assignment expression test with unknown assignment, should throw an exception",
    input: `
        hi conso
        a *=- 4;
        bye conso
      `,
    output: SyntaxError,
  },
  {
    name: "assignment expression test with invalid left hand side, should throw an exception",
    input: `
        hi conso
        "hello" = 4;
        bye conso
      `,
    output: SyntaxError,
  },
  {
    name: "assignment expression test with invalid left hand side 2nd, should throw an exception",
    input: `
        hi conso
        5 = 890;
        bye conso
      `,
    output: SyntaxError,
  },
  {
    name: "assignment expression test with no other token, should throw an exception",
    input: `
        hi conso
        a = 890
      `,
    output: SyntaxError,
  },
  // multiplicative expression test
  {
    name: "multiplicative expression test with no other token, should throw an exception",
    input: `
        hi conso
        6 * 5 * 
      `,
    output: SyntaxError,
  },
  // paranthesized expression tests
  {
    name: "paranthesized expression test with only open parenthesis, should throw an exception",
    input: `
        hi conso
        (a + 4;
        bye conso
      `,
    output: SyntaxError,
  },
  {
    name: "paranthesized expression test with only close parenthesis, should throw an exception",
    input: `
        hi conso
        a + 4);
        bye conso
      `,
    output: SyntaxError,
  },

  {
    name: "paranthesized expression test with only close parenthesis and no other token, should throw an exception",
    input: `
        hi conso
        (
      `,
    output: SyntaxError,
  },
  {
    name: "paranthesized expression test with one close parenthesis missing, should throw an exception",
    input: `
        hi conso
        (a * (4 + 8 + 10);
        bye conso
      `,
    output: SyntaxError,
  },
  // logical expression test
  {
    name: "logical expression test with right operand missing, should throw an exception",
    input: `
    hi conso
    conso ye hai a = b && ;
    bye conso;
      `,
    output: SyntaxError,
  },
  {
    name: "logical expression test with left operand missing, should throw an exception",
    input: `
    hi conso
    conso ye hai a = && b;
    bye conso;
      `,
    output: SyntaxError,
  },
  {
    name: "logical expression test with both operand missing, should throw an exception",
    input: `
    hi conso
    agar conso (&&);
    bye conso;
      `,
    output: SyntaxError,
  },
  // float expression test
  {
    name: "float expression test with multiple continuous decimal points - 1, should throw an exception",
    input: `
    hi conso
    conso ye hai a = 1..2;
    bye conso;
      `,
    output: SyntaxError,
  },
  {
    name: "float expression test with multiple continuous decimal points - 2, should throw an exception",
    input: `
    hi conso
    conso ye hai a = ..2;
    bye conso;
      `,
    output: SyntaxError,
  },
  {
    name: "float expression test with multiple decimal points at different places, should throw an exception",
    input: `
    hi conso
    conso ye hai a = 1.2.3;
    bye conso;
      `,
    output: SyntaxError,
  },
];

export const IfStatementNagativeTests = [
  {
    name: "If statement test - nothing after if condition , should throw an exception",
    input: `
        hi conso
        agar conso (true)
      `,
    output: SyntaxError,
  },
  {
    name: "If statement test - no if condition before else , should throw an exception",
    input: `
        hi conso
        warna conso {

        }
        bye conso;
      `,
    output: SyntaxError,
  },
  {
    name: "If statement test - if without a condition , should throw an exception",
    input: `
        hi conso
       agar conso {

       }
        bye conso;
      `,
    output: SyntaxError,
  },
  {
    name: "Else-if statement test - else-if ladder without if condition first , should throw an exception",
    input: `
        hi conso
        nahi to conso (true) {
        }
        bye conso;
      `,
    output: SyntaxError,
  },
  {
    name: "Else-if statement test - else-if ladder with multiple levels without if condition first , should throw an exception",
    input: `
        hi conso
        nahi to conso (true) {
        } nahi to conso (true) {
        }
        bye conso;
      `,
    output: SyntaxError,
  },
  {
    name: "Else-if statement test - nothing after else-if ladder , should throw an exception",
    input: `
        hi conso
        agar conso (true) {

        } nahi to conso (true)
        bye conso;
      `,
    output: SyntaxError,
  },
  {
    name: "Else-if statement test - nothing after else-if ladder with multiple levels , should throw an exception",
    input: `
        hi conso
        agar conso (true) {

        } nahi to conso (true) {

        } nahi to conso (true)
        bye conso;
      `,
    output: SyntaxError,
  },
  {
    name: "Else-if statement test - else-if without a condition , should throw an exception",
    input: `
        hi conso
        agar conso (true) {

        } nahi to conso
        bye conso;
      `,
    output: SyntaxError,
  },
  {
    name: "Else-if statement test - else-if without a condition, multple levels , should throw an exception",
    input: `
        hi conso
        agar conso (true) {

        } nahi to conso (true) {

        } nahi to conso
        bye conso;
      `,
    output: SyntaxError,
  }
];

export const ContinueStatementNegativeTests = [
  {
    name: "Continue statement test - continue outside a loop, should throw an exception",
    input: `
        hi conso
          agla dekh conso
        bye conso
      `,
    output: SyntaxError,
  },
]