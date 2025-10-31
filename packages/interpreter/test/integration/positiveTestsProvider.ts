export const NoOutputPositiveTests = [
  // init statement tests
  {
    name: "interpreter empty init statement test, should success",
    input: `
      hi conso
      bye conso
    `,
  },
  {
    name: "interpreter empty init statement test with random charaters initially, should success",
    input: `
      some random characters
      random random random
      hi conso
      bye conso
    `,
  },
  // empty statement tests
  {
    name: "interpreter empty statement test, should success",
    input: `
      hi conso
      ;
      bye conso
    `,
  },
  {
    name: "interpreter multiple empty statements test, should success",
    input: `
      hi conso
      ;
      ;
      ;;
      bye conso
    `,
  },
  // block statement tests
  {
    name: "interpreter block statement test with empty block, should success",
    input: `
      hi conso
      {};
      bye conso
    `,
  },
  {
    name: "interpreter block statement test with variable statement inside, should success",
    input: `
      hi conso
      {
        conso ye hai a = 4;
      }
      bye conso
    `,
  },
  // variable statement test
  {
    name: "interpreter variable statement test with basic variable declaration, should success",
    input: `
      hi conso
      conso ye hai a, b, c;
      bye conso
    `,
  },
  {
    name: "interpreter variable statement test with basic variable declaration and initialisation, should success",
    input: `
      hi conso
      conso ye hai a = 10, b = "crap";
      bye conso
    `,
  },
  {
    name: "interpreter variable statement test with multiple variable initialisation, should success",
    input: `
      hi conso
      conso ye hai a = 10, b = 5;
      bye conso
    `,
  },
  {
    name: "interpreter variable statement test with variable initialisation with some expression, should success",
    input: `
      hi conso
      conso ye hai a = 7 + 90;
      bye conso
    `,
  },
  // assignment expression tests
  {
    name: "simple assignment expression test with only one identifer, should success",
    input: `
      hi conso
      conso ye hai a = true;
      a = 4;
      bye conso
    `,
  },
  {
    name: "complex assignment expression test with only one identifer, should success",
    input: `
      hi conso
      conso ye hai a = 2;
      a *= 4;
      bye conso
    `,
  },
  // paranthesized expression tests
  {
    name: "paranthesized expression test with one parenthesis and simple expression, should success",
    input: `
      hi conso
      conso ye hai a = 2;
      (a + 4);
      bye conso
    `,
  },
  {
    name: "paranthesized expression test with one parenthesis and complex expression, should success",
    input: `
      hi conso
      conso ye hai a = 2;
      (a + 4) * 10 + (5 - 4);
      bye conso
    `,
  },
  {
    name: "paranthesized expression test with multiple parenthesis, should success",
    input: `
      hi conso
      conso ye hai a = 2;
      (a * (4 + 8) + 10);
      bye conso
    `,
  },
  // if statement test
  {
    name: "paranthesized expression test with multiple parenthesis, should success",
    input: `
    hi conso
    conso ye hai x = 9;
    agar conso (x != 9) {
      x = 5;
      bol conso x;
    } warna conso (x >= 9);
    bye conso;
    `,
  },
];

export const WithOutputPositiveTests = [
  {
    name: "variable assignment test with multiple variables, should success",
    input: `
      hi conso;
      conso ye hai a , b;
      a = b = 60;
      bol conso a, b;
      bye conso
    `,
    output: "60 60",
  },
  {
    name: `binaryExpression print test with nalla and "==", should success`,
    input: `
      hi conso;
      conso ye hai a;
      agar conso (a == nalla) {
        bol conso a;
      }
      bye conso
    `,
    output: "nalla",
  },
  {
    name: `binaryExpression print test with nalla without any operator, should success`,
    input: `
      hi conso;
      conso ye hai a;
      agar conso (a) {
        bol conso a;
      } warna conso {
        bol conso "not nalla";
      }
      bye conso
    `,
    output: "not nalla",
  },
  {
    name: `binaryExpression print test - comparing nalla with nalla "==", should success`,
    input: `
      hi conso;
      agar conso (nalla == nalla) {
        bol conso "hai nalla";
      }
      bye conso
    `,
    output: "hai nalla",
  },
  {
    name: `binaryExpression print test with comparing nalla with var "a", should success`,
    input: `
      hi conso;
      conso ye hai a;
      agar conso (nalla == a) {
        bol conso "hai nalla";
      }
      bye conso
    `,
    output: "hai nalla",
  },
  {
    name: `binaryExpression print test with comparing nalla with var "a" explicit initialization, should success`,
    input: `
      hi conso;
      conso ye hai a = nalla;
      agar conso (nalla == a) {
        bol conso "hai nalla";
      }
      bye conso
    `,
    output: "hai nalla",
  },
  {
    name: `binaryExpression print test with comparing nalla with string nalla, should success`,
    input: `
      hi conso;
      conso ye hai a = nalla;
      agar conso ("nalla" == a) {
        bol conso "hai nalla";
      } warna conso {
        bol conso "not nalla";
      }
      bye conso
    `,
    output: "not nalla",
  },
  {
    name: `binaryExpression print test with comparing nalla with string nalla, should success`,
    input: `
      hi conso;
      conso ye hai a = "nalla";
      agar conso (nalla == a) {
        bol conso "hai nalla";
      } warna conso {
        bol conso "not nalla";
      }
      bye conso
    `,
    output: "not nalla",
  },
  {
    name: `binaryExpression print test with comparing nalla with string null, should success`,
    input: `
      hi conso;
      conso ye hai a = "null";
      agar conso (nalla == a) {
        bol conso "hai nalla";
      } warna conso {
        bol conso "not nalla";
      }
      bye conso
    `,
    output: "not nalla",
  },
  {
    name: `binaryExpression print test with nalla var "a" & "b" - 0, should success`,
    input: `
      hi conso;
      conso ye hai a;
      conso ye hai b;
      agar conso (a == b) {
        bol conso "hai nalla";
      } warna conso {
        bol conso "nahi nalla";
      }
      bye conso
    `,
    output: "hai nalla",
  },
  {
    name: `binaryExpression print test with nalla var "a" & "b" - 1, should success`,
    input: `
      hi conso;
      conso ye hai a;
      conso ye hai b = nalla;
      agar conso (a == b) {
        bol conso "hai nalla";
      } warna conso {
        bol conso "nahi nalla";
      }
      bye conso
    `,
    output: "hai nalla",
  },
  {
    name: `binaryExpression print test with nalla var "a" & "b" -2, should success`,
    input: `
      hi conso;
      conso ye hai a;
      conso ye hai b = "nalla";
      agar conso (a == b) {
        bol conso "hai nalla";
      } warna conso {
        bol conso "nahi nalla";
      }
      bye conso
    `,
    output: "nahi nalla",
  },
  // Boolean test
  {
    name: `binaryExpression print test with boolean expression - true, should success`,
    input: `
      hi conso;
      conso ye hai a = true;
      agar conso (true == a) {
        bol conso "hai true";
      } warna conso {
        bol conso "nahi true";
      }
      bye conso
    `,
    output: "hai true",
  },
  {
    name: `binaryExpression print test with boolean expression - false, should success`,
    input: `
      hi conso;
      conso ye hai a = false;
      agar conso (false == a) {
        bol conso "hai false";
      } warna conso {
        bol conso "nahi false";
      }
      bye conso
    `,
    output: "hai false",
  },
  {
    name: `binaryExpression print test with boolean expression - true with string true, should success`,
    input: `
      hi conso;
      conso ye hai a = "true";
      agar conso (true == a) {
        bol conso "hai true";
      } warna conso {
        bol conso "nahi true";
      }
      bye conso
    `,
    output: "nahi true",
  },
  {
    name: `binaryExpression print test with boolean expression - true expression, should success`,
    input: `
      hi conso;
      conso ye hai a = 7;
      agar conso (true == (a > 5)) {
        bol conso "hai true";
      } warna conso {
        bol conso "nahi true";
      }
      bye conso
    `,
    output: "hai true",
  },
  {
    name: `binaryExpression print test with boolean expression - true expression & string "true", should success`,
    input: `
      hi conso;
      conso ye hai a = 7;
      agar conso ("true" == (a > 5)) {
        bol conso "hai true";
      } warna conso {
        bol conso "nahi true";
      }
      bye conso
    `,
    output: "nahi true",
  },
  {
    name: `binaryExpression print test with boolean expression - true expression & two expressions, should success`,
    input: `
      hi conso;
      conso ye hai a = true;
      agar conso ("true" == (a == true)) {
        bol conso "hai true";
      } warna conso {
        bol conso "nahi true";
      }
      bye conso
    `,
    output: "nahi true",
  },
  {
    name: `binaryExpression print test with boolean expression - true expression -3, should success`,
    input: `
      hi conso;
      conso ye hai a = true;
      agar conso ((a == true) == (a == true)) {
        bol conso "hai true";
      } warna conso {
        bol conso "nahi true";
      }
      bye conso
    `,
    output: "hai true",
  },
  {
    name: `binaryExpression print test with boolean expression - true expression - 4, should success`,
    input: `
      hi conso;
      conso ye hai a;
      agar conso ((a == nalla) == (a == true)) {
        bol conso "hai true";
      } warna conso {
        bol conso "nahi true";
      }
      bye conso
    `,
    output: "nahi true",
  },
  {
    name: `binaryExpression print test with boolean expression - true expression - 5, should success`,
    input: `
      hi conso;
      conso ye hai a;
      agar conso ((a == nalla) == (a == true)) {
        bol conso "hai true";
      } warna conso {
        bol conso "nahi true";
      }
      bye conso
    `,
    output: "nahi true",
  },
  {
    name: `binaryExpression print test with boolean expression - true expression - 5, should success`,
    input: `
      hi conso;
      conso ye hai a;
      conso ye hai b = false;
      agar conso (a == b) {
        bol conso "hai true";
      } warna conso {
        bol conso "nahi true";
      }
      bye conso
    `,
    output: "nahi true",
  },
  {
    name: `binaryExpression print test with boolean expression - false variables comparison, should success`,
    input: `
      hi conso;
      conso ye hai a = false;
      conso ye hai b = false;
      agar conso (a == b) {
        bol conso "hai false";
      } warna conso {
        bol conso "nahi false";
      }
      bye conso
    `,
    output: "hai false",
  },
  {
    name: `binaryExpression print test with boolean expression - false variables comparison with string false, should success`,
    input: `
      hi conso;
      conso ye hai a = "false";
      conso ye hai b = false;
      agar conso (a == b) {
        bol conso "hai false";
      } warna conso {
        bol conso "nahi false";
      }
      bye conso
    `,
    output: "nahi false",
  },
  {
    name: "float value addition with integer value test, should success",
    input: `
      hi conso
      conso ye hai a = 1.2, b = 2;
      bol conso a + b;
      bye conso
    `,
    output: "3.2"
  },
  {
    name: "float value addition with float value value test, should success",
    input: `
      hi conso
      conso ye hai a = 1.2, b = 2.3;
      bol conso a + b;
      bye conso
    `,
    output: "3.5"
  },
  {
    name: "printStatement test with multiple expressions, should success",
    input: `
      hi conso;
      conso ye hai a = 2, b = 60;
      bol conso (a * (4 + 8) + 10), b;
      bye conso
    `,
    output: "34 60",
  },
  {
    name: "printStatement test with multiple expressions and re assigning value of one variable, should success",
    input: `
      hi conso;
      conso ye hai a = 2, b = 60;

      a = b + 3;
      bol conso a, b;
      bye conso
    `,
    output: "63 60",
  },
  {
    name: "printStatement test with multiple expressions & without any variables, should success",
    input: `
      hi conso;
      bol conso "hello", true, false;
      bye conso
    `,
    output: "hello true false",
  },
  {
    name: "printStatement test with nalla, should success",
    input: `
      hi conso;
      bol conso nalla;
      bye conso;
    `,
    output: "nalla",
  },
  {
    name: "printStatement test with nalla as second parameter, should success",
    input: `
      hi conso;
      bol conso 10, nalla;
      bye conso;
    `,
    output: "10 nalla",
  },
  {
    name: "printStatement test with string concatenation, should success",
    input: `
      hi conso;
      bol conso "hello" + "crap";
      bye conso;
    `,
    output: "hellocrap",
  },
  {
    name: "printStatement test with multiple expresions including nalla, should success",
    input: `
      hi conso;
      conso ye hai a = 70;
      bol conso 6*5, nalla, "jamtara", a;
      bye conso;
    `,
    output: "30 nalla jamtara 70",
  },
  {
    name: "printStatement test with nalla variable, should success",
    input: `
      hi conso;
      conso ye hai a;
      bol conso a;
      bye conso;
    `,
    output: "nalla",
  },
  {
    name: `printStatement test with string "undefined", should success`,
    input: `
      hi conso;
      bol conso "undefined";
      bye conso;
    `,
    output: "undefined",
  },
  {
    name: `printStatement test with nalla variable, should success`,
    input: `
      hi conso;
      conso ye hai a;
      bol conso a;
      bye conso;
    `,
    output: "nalla",
  },
  {
    name: `printStatement test with true variable, should success`,
    input: `
      hi conso;
      conso ye hai a = true;
      bol conso a;
      bye conso;
    `,
    output: "true",
  },
  {
    name: `printStatement test with false variable, should success`,
    input: `
      hi conso;
      conso ye hai a = false;
      bol conso a;
      bye conso;
    `,
    output: "false",
  },
  {
    name: `printStatement test with assignment expression, should success`,
    input: `
      hi conso;
      conso ye hai a;
      bol conso a = 90;
      bye conso;
    `,
    output: "90",
  },
  {
    name: `printStatement test with logical AND, should success`,
    input: `
      hi conso;
      bol conso 9 && 10;
      bye conso;
    `,
    output: "10",
  },
  {
    name: `printStatement test with logical OR, should success`,
    input: `
      hi conso;
      bol conso 9 || 10;
      bye conso;
    `,
    output: "9",
  },
  {
    name: `printStatement test with logical - 1, should success`,
    input: `
      hi conso;
      bol conso false && true;
      bye conso;
    `,
    output: "false",
  },
  {
    name: `printStatement test with logical - 2, should success`,
    input: `
    hi conso;
    conso ye hai a = true;
    bol conso a && false;
    bye conso;
    `,
    output: "false",
  },
  {
    name: `printStatement test with logical - 3, should success`,
    input: `
    hi conso;
    conso ye hai a = true;
    bol conso a && true;
    bye conso;
    `,
    output: "true",
  },
  {
    name: `printStatement test with equality, should success`,
    input: `
      hi conso;
      bol conso 9 == 10;
      bye conso;
    `,
    output: "false",
  },
  {
    name: `printStatement test with inequality, should success`,
    input: `
      hi conso;
      bol conso 9 != 10;
      bye conso;
    `,
    output: "true",
  },
  {
    name: `printStatement test with logical OR, should success`,
    input: `
      hi conso;
      bol conso 9 || 10;
      bye conso;
    `,
    output: "9",
  },
  {
    name: `printStatement test with logical OR - 2, should success`,
    input: `
      hi conso;
      bol conso false || true;
      bye conso;
    `,
    output: "true",
  },
  {
    name: `printStatement test with boolean true false and logical, should success`,
    input: `
      hi conso;
      bol conso true != 10;
      bye conso;
    `,
    output: "true",
  },
  {
    name: `printStatement test with boolean true and string "true", should success`,
    input: `
      hi conso;
      bol conso "true" == true;
      bye conso;
    `,
    output: "false",
  },
  // while statement / loop tests
  {
    name: `whileStatement test with 1 time loop, should success`,
    input: `
      hi conso;
      conso ye hai a = 0;
      jab tak conso (a < 1) {
        bol conso "conso";
        a += 1;
      }
      bye conso;
    `,
    output: "conso",
  },
  {
    name: `whileStatement test with single break statement, should success`,
    input: `
      hi conso;
      jab tak conso (true) 
        bas kar conso;
      bol conso "end";
      bye conso;
    `,
    output: "end",
  },
  {
    name: `whileStatement test with nested loops, should success`,
    input: `
      hi conso;
      conso ye hai a = 0;
      jab tak conso (a < 2) {
        jab tak conso (true)
          bas kar conso;
        bol conso "hello";
        agar conso (true)
          bas kar conso;
      }
      bye conso;
    `,
    output: "hello",
  },
  {
    name: `whileStatement with multiple breaks, should success`,
    input: `
      hi conso;
      conso ye hai a = 0;
      jab tak conso (a < 2) {
        bol conso "hello";
        agar conso (true)
          bas kar conso;
        bas kar conso;
        bas kar conso;
      }
      bye conso;
    `,
    output: "hello",
  },
  // if statement tests
  {
    name: `if statement success test - 1: only if, should success`,
    input: `
    hi conso
    agar conso (true) {
      bol conso "conso";
    }
    bye conso;
    `,
    output: "conso",
  },
  {
    name: `if statement success test - 2: if else both, should success`,
    input: `
    hi conso
    agar conso (true) {
      bol conso "true";
    } warna conso {
      bol conso "false";
    }
    bye conso;
    `,
    output: "true",
  },
  {
    name: `if statement success test - 3: if only with comarison condn, should success`,
    input: `
    hi conso
    conso ye hai x = 9;
    agar conso (x >= 9) {
      x = 5;
      bol conso x;
    } 
    bye conso;
    `,
    output: "5",
  },
  // else-if statement tests
  {
    name: `else-if statement success test - 1: if with one else-if, should success`,
    input: `
    hi conso
    agar conso (false) {
      bol conso "false";
    } nahi to conso (true) {
      bol conso "true";
    }
    bye conso;
    `,
    output: "true",
  },
  {
    name: `else-if statement success test - 2: if with multiple else-ifs, should success`,
    input: `
    hi conso
    conso ye hai x = 10;
    agar conso (x < 5) {
      bol conso "x < 5";
    } nahi to conso (x < 8) {
      bol conso "x < 8";
    } nahi to conso (x < 12) {
      bol conso "x < 12";
    } nahi to conso (x < 15) {
      bol conso "x < 15";
    }
    bye conso;
    `,
    output: "x < 12",
  },
  {
    name: `else-if statement success test - 3: nested if-else-if ladder, should success`,
    input: `
    hi conso
    conso ye hai a = 15;
    agar conso (a < 0) {
      bol conso "a < 0";
    } nahi to conso (a > 0) {
      agar conso (a < 10) {
        bol conso "a < 10";
      } nahi to conso (a < 20) {
        bol conso "a < 20";
      }
    }
    bye conso
    `,
    output: "a < 20",
  },
  {
    name: `else-if statement success test - 4: if-else-if ladder evaluating to else, should success`,
    input: `
    hi conso
    conso ye hai x = 15;
    agar conso (x < 5) {
      bol conso "x < 5";
    } nahi to conso (x < 8) {
      bol conso "x < 8";
    } nahi to conso (x < 12) {
      bol conso "x < 12";
    } warna conso {
      bol conso "x > 12";
    }
    bye conso;
    `,
    output: "x > 12",
  },
  // logical expression test
  {
    name: `logical "&&" test with true false, should success`,
    input: `
        hi conso
        agar conso (true && false) {
          bol conso "true";
        } warna conso {
          bol conso "false";
        }
        bye conso;
      `,
    output: `false`,
  },
  // modulus operator test
  {
    name: `modulus operator "%" test, should success`,
    input: `
        hi conso
        bol conso 90 % 9;
        bye conso;
      `,
    output: `0`,
  },
  {
    name: `modulus operator "%" test - 2, should success`,
    input: `
        hi conso
        bol conso 27 % 5;
        bye conso;
      `,
    output: `2`,
  },
  {
    name: `modulus operator "%" test - 2, should success`,
    input: `
        hi conso
        bol conso 5 % 20;
        bye conso;
      `,
    output: `5`,
  },
  {
    name: `whileStatement test with single continue statement, should success`,
    input: `
      hi conso;
      conso ye hai a = 5;
      conso ye hai step = 0;
      jab tak conso (a > 0) {
        step += 1;
        agar conso (a % 2 != 0){
          a -= 2;
          agla dekh conso;
        }
        a -= 1;
      }
      bol conso step;
      bye conso;
    `,
    output: "3",
  },
  {
    name: `whileStatement test with multiple continue statement, should success`,
    input: `
      hi conso;
      conso ye hai a = 5;
      conso ye hai step = 0;
      jab tak conso (a > 0) {
        step += 1;
        agar conso (a % 2 == 0){
          a -= 2;
          agla dekh conso;
        }
        a -= 1;
        agla dekh conso;
        bol conso "oye oye oye.. yha tk nhi aana tha conso";
      }
      bol conso step;
      bye conso;
    `,
    output: "3",
  },
  {
    // step:  1 => 2
    // a: 10 => 7 => 6 => 3 => 2 => -1
    name: `whileStatement test with single continue statement without block, should success`,
    input: `
      hi conso;
      conso ye hai a = 10;
      conso ye hai step = 0;
      jab tak conso (a > 0) {
        agar conso (a % 2 == 0){
          a -= 3;
          agla dekh conso;
        }
        a -= 1;
        agar conso (step == 1) agla dekh conso
        step += 1;
      }
      bol conso step;
      bye conso;
    `,
    output: "1",
  },
];